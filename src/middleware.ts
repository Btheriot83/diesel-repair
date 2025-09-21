import type { MiddlewareHandler } from 'astro';

/**
 * PreviewProtect middleware
 * - Blocks all NON-production environments behind HTTP Basic Auth
 * - Also adds X-Robots-Tag: noindex on non-production so crawlers back off
 * - Production (VERCEL_ENV==='production') is unaffected
 *
 * Configure credentials via environment variables:
 *   PREVIEW_AUTH_USER
 *   PREVIEW_AUTH_PASS
 *
 * To disable auth locally, omit the vars or set PREVIEW_AUTH_DISABLE=1
 */
export const onRequest: MiddlewareHandler = async (context, next) => {
  const isVercel = process.env.VERCEL === '1';
  const env = process.env.VERCEL_ENV || (process.env.NODE_ENV === 'production' ? 'production' : 'development');
  const isProd = env === 'production';

  // Short-circuit for production
  if (isProd) {
    return next();
  }

  // Gate non-production with Basic Auth unless explicitly disabled
  const disableAuth = process.env.PREVIEW_AUTH_DISABLE === '1';
  const user = process.env.PREVIEW_AUTH_USER || '';
  const pass = process.env.PREVIEW_AUTH_PASS || '';

  if (!disableAuth) {
    const auth = context.request.headers.get('authorization');
    let ok = false;

    if (auth && auth.startsWith('Basic ')) {
      try {
        const decoded = Buffer.from(auth.slice(6), 'base64').toString('utf8');
        const idx = decoded.indexOf(':');
        const u = idx >= 0 ? decoded.slice(0, idx) : decoded;
        const p = idx >= 0 ? decoded.slice(idx + 1) : '';
        ok = u === user && p === pass;
      } catch {
        ok = false;
      }
    }

    if (!ok) {
      return new Response('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Preview", charset="UTF-8"',
          // Even on 401, keep bots away
          'X-Robots-Tag': 'noindex, nofollow, noarchive'
        }
      });
    }
  }

  // Proceed to app, but add noindex on non-production
  const res = await next();

  // Apply conservative tag set to keep previews out of indices
  res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');

  // Optionally mirror in HTML for user agents that ignore headers
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('text/html')) {
    try {
      const original = await res.text();
      const injected = original.replace(
        /<head(\s[^>]*)?>/i,
        (m) => `${m}\n<meta name="robots" content="noindex,nofollow,noarchive">`
      );
      return new Response(injected, {
        status: res.status,
        headers: res.headers
      });
    } catch {
      // If body already locked/streamed, fall back to header only
    }
  }

  return res;
};
