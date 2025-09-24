import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const res = await next();
  const env = (import.meta as any).env?.VERCEL_ENV || process.env.VERCEL_ENV || 'development';
  if (env !== 'production') {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
  }
  return res;
};
