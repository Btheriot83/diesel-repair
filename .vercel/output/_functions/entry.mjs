import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BtbdVTS0.mjs';
import { manifest } from './manifest_CutNSb1t.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/corridors/_slug_.astro.mjs');
const _page2 = () => import('./pages/locations/_slug_.astro.mjs');
const _page3 = () => import('./pages/robots.txt.astro.mjs');
const _page4 = () => import('./pages/services/_slug_.astro.mjs');
const _page5 = () => import('./pages/sitemap-images.xml.astro.mjs');
const _page6 = () => import('./pages/sitemap-index.xml.astro.mjs');
const _page7 = () => import('./pages/sitemap.xml.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/corridors/[slug].astro", _page1],
    ["src/pages/locations/[slug].astro", _page2],
    ["src/pages/robots.txt.ts", _page3],
    ["src/pages/services/[slug].astro", _page4],
    ["src/pages/sitemap-images.xml.ts", _page5],
    ["src/pages/sitemap-index.xml.ts", _page6],
    ["src/pages/sitemap.xml.ts", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "82f50c5c-1aae-45de-bba7-4257dceeb0b8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
