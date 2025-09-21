import 'es-module-lexer';
import './chunks/astro-designed-error-pages_tDSALAJF.mjs';
import 'kleur/colors';
import './chunks/astro/server_DXK4Mque.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_B87QWu5t.mjs';

const onRequest$1 = async (context, next) => {
  process.env.VERCEL === "1";
  const env = process.env.VERCEL_ENV || (process.env.NODE_ENV === "production" ? "production" : "development");
  const isProd = env === "production";
  if (isProd) {
    return next();
  }
  const disableAuth = process.env.PREVIEW_AUTH_DISABLE === "1";
  const user = process.env.PREVIEW_AUTH_USER || "";
  const pass = process.env.PREVIEW_AUTH_PASS || "";
  if (!disableAuth) {
    const auth = context.request.headers.get("authorization");
    let ok = false;
    if (auth && auth.startsWith("Basic ")) {
      try {
        const decoded = Buffer.from(auth.slice(6), "base64").toString("utf8");
        const idx = decoded.indexOf(":");
        const u = idx >= 0 ? decoded.slice(0, idx) : decoded;
        const p = idx >= 0 ? decoded.slice(idx + 1) : "";
        ok = u === user && p === pass;
      } catch {
        ok = false;
      }
    }
    if (!ok) {
      return new Response("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Preview", charset="UTF-8"',
          // Even on 401, keep bots away
          "X-Robots-Tag": "noindex, nofollow, noarchive"
        }
      });
    }
  }
  const res = await next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("text/html")) {
    try {
      const original = await res.text();
      const injected = original.replace(
        /<head(\s[^>]*)?>/i,
        (m) => `${m}
<meta name="robots" content="noindex,nofollow,noarchive">`
      );
      return new Response(injected, {
        status: res.status,
        headers: res.headers
      });
    } catch {
    }
  }
  return res;
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
