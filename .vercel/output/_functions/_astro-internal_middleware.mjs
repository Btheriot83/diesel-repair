import 'es-module-lexer';
import './chunks/astro-designed-error-pages_C-xmdsXc.mjs';
import 'kleur/colors';
import './chunks/astro/server_b5lYJ8aU.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_C7sFNffK.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://azmobiledieselrepair.com", "SSR": true};
const onRequest$1 = async (context, next) => {
  const res = await next();
  const env = Object.assign(__vite_import_meta_env__, { _: process.env._ })?.VERCEL_ENV || process.env.VERCEL_ENV || "development";
  if (env !== "production") {
    res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  }
  return res;
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
