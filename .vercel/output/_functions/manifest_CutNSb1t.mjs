import 'kleur/colors';
import { l as decodeKey } from './chunks/astro/server_DXK4Mque.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_tDSALAJF.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_voYyXymM.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/brandontheriot/projects/Diesel%20Repair/","cacheDir":"file:///Users/brandontheriot/projects/Diesel%20Repair/node_modules/.astro/","outDir":"file:///Users/brandontheriot/projects/Diesel%20Repair/dist/","srcDir":"file:///Users/brandontheriot/projects/Diesel%20Repair/src/","publicDir":"file:///Users/brandontheriot/projects/Diesel%20Repair/public/","buildClientDir":"file:///Users/brandontheriot/projects/Diesel%20Repair/dist/client/","buildServerDir":"file:///Users/brandontheriot/projects/Diesel%20Repair/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.Bo26yLFj.css"}],"routeData":{"route":"/corridors/[slug]","isIndex":false,"type":"page","pattern":"^\\/corridors\\/([^/]+?)\\/?$","segments":[[{"content":"corridors","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/corridors/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.Bo26yLFj.css"}],"routeData":{"route":"/locations/[slug]","isIndex":false,"type":"page","pattern":"^\\/locations\\/([^/]+?)\\/?$","segments":[[{"content":"locations","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/locations/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.Bo26yLFj.css"}],"routeData":{"route":"/services/[slug]","isIndex":false,"type":"page","pattern":"^\\/services\\/([^/]+?)\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/services/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sitemap-images.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap-images\\.xml\\/?$","segments":[[{"content":"sitemap-images.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap-images.xml.ts","pathname":"/sitemap-images.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sitemap-index.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap-index\\.xml\\/?$","segments":[[{"content":"sitemap-index.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap-index.xml.ts","pathname":"/sitemap-index.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sitemap.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap\\.xml\\/?$","segments":[[{"content":"sitemap.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap.xml.ts","pathname":"/sitemap.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.Bo26yLFj.css"},{"type":"external","src":"/_astro/index.CNv0jO-J.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://azmobiledieselrepair.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/brandontheriot/projects/Diesel Repair/src/pages/corridors/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/corridors/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/brandontheriot/projects/Diesel Repair/src/pages/locations/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/locations/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/brandontheriot/projects/Diesel Repair/src/pages/services/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/brandontheriot/projects/Diesel Repair/src/pages/sitemap-images.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/sitemap-images.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/brandontheriot/projects/Diesel Repair/src/pages/sitemap.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/sitemap.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/brandontheriot/projects/Diesel Repair/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/corridors/[slug]@_@astro":"pages/corridors/_slug_.astro.mjs","\u0000@astro-page:src/pages/locations/[slug]@_@astro":"pages/locations/_slug_.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/services/[slug]@_@astro":"pages/services/_slug_.astro.mjs","\u0000@astro-page:src/pages/sitemap-images.xml@_@ts":"pages/sitemap-images.xml.astro.mjs","\u0000@astro-page:src/pages/sitemap-index.xml@_@ts":"pages/sitemap-index.xml.astro.mjs","\u0000@astro-page:src/pages/sitemap.xml@_@ts":"pages/sitemap.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CutNSb1t.mjs","/Users/brandontheriot/projects/Diesel Repair/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DDlXjjZ-.mjs","/Users/brandontheriot/projects/Diesel Repair/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/brandontheriot/projects/Diesel Repair/.astro/content-modules.mjs":"chunks/content-modules_BssnC4OZ.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_w0n2IGfj.mjs","/Users/brandontheriot/projects/Diesel Repair/src/content/services/emergency-roadside-assistance.mdx?astroPropagatedAssets":"chunks/emergency-roadside-assistance_DX9zM-7W.mjs","/Users/brandontheriot/projects/Diesel Repair/src/content/cities/phoenix.mdx?astroPropagatedAssets":"chunks/phoenix_DtA02PxS.mjs","/Users/brandontheriot/projects/Diesel Repair/src/content/corridors/i-10.mdx?astroPropagatedAssets":"chunks/i-10_DO7VS2oI.mjs","/Users/brandontheriot/projects/Diesel Repair/src/content/services/emergency-roadside-assistance.mdx":"chunks/emergency-roadside-assistance_DeAAN0om.mjs","/Users/brandontheriot/projects/Diesel Repair/src/content/cities/phoenix.mdx":"chunks/phoenix_CKnB80mU.mjs","/Users/brandontheriot/projects/Diesel Repair/src/content/corridors/i-10.mdx":"chunks/i-10_CKHl9wBS.mjs","@astrojs/react/client.js":"_astro/client.DL-_0xdV.js","/Users/brandontheriot/projects/Diesel Repair/src/components/ServicesGrid.astro?astro&type=script&index=0&lang.ts":"_astro/ServicesGrid.astro_astro_type_script_index_0_lang.DtbDefY3.js","/Users/brandontheriot/projects/Diesel Repair/src/components/UnifiedEmergencyHub.astro?astro&type=script&index=0&lang.ts":"_astro/UnifiedEmergencyHub.astro_astro_type_script_index_0_lang.Bwjv3eLV.js","/Users/brandontheriot/projects/Diesel Repair/src/components/FleetServices.astro?astro&type=script&index=0&lang.ts":"_astro/FleetServices.astro_astro_type_script_index_0_lang.CwseL3wm.js","/Users/brandontheriot/projects/Diesel Repair/src/components/FAQ.astro?astro&type=script&index=0&lang.ts":"_astro/FAQ.astro_astro_type_script_index_0_lang.BkJW_lva.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/brandontheriot/projects/Diesel Repair/src/components/ServicesGrid.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"view-all-services-btn\")?.addEventListener(\"click\",()=>{document.querySelector(\"#contact\")?.scrollIntoView({behavior:\"smooth\"})});"],["/Users/brandontheriot/projects/Diesel Repair/src/components/UnifiedEmergencyHub.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"learn-more-emergency\")?.addEventListener(\"click\",()=>{document.querySelector(\"#services\")?.scrollIntoView({behavior:\"smooth\"})});document.getElementById(\"learn-more-onsite\")?.addEventListener(\"click\",()=>{document.querySelector(\"#services\")?.scrollIntoView({behavior:\"smooth\"})});"],["/Users/brandontheriot/projects/Diesel Repair/src/components/FleetServices.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"fleet-contact-button\")?.addEventListener(\"click\",()=>{const t=document.getElementById(\"contact\");t&&t.scrollIntoView({behavior:\"smooth\"})});"],["/Users/brandontheriot/projects/Diesel Repair/src/components/FAQ.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.querySelectorAll(\".accordion-trigger\");e.forEach(t=>{t.addEventListener(\"click\",function(){const c=this.getAttribute(\"data-index\"),o=document.querySelector(`.accordion-content[data-index=\"${c}\"]`),r=this.querySelector(\".chevron-icon\");e.forEach((n,i)=>{if(n!==t){const s=document.querySelector(`.accordion-content[data-index=\"${i}\"]`),a=n.querySelector(\".chevron-icon\");s?.classList.remove(\"accordion-open\"),a?.classList.remove(\"rotate-180\")}}),o&&(o.classList.toggle(\"accordion-open\"),r?.classList.toggle(\"rotate-180\"))})})});"]],"assets":["/_astro/_slug_.Bo26yLFj.css","/_astro/index.CNv0jO-J.css","/favicon.ico","/placeholder.svg","/_astro/client.DL-_0xdV.js","/images/AC Cooling icon.png","/images/AC Cooling icon.webp","/images/Alt Hero 3.png","/images/Alt Hero 3.webp","/images/Alt Hero 4.png","/images/Alt Hero 4.webp","/images/Alt hero 2.png","/images/Alt hero 2.webp","/images/Alt hero image.png","/images/Alt hero image.webp","/images/Alternators_and_Starters-removebg-preview.png","/images/Alternators_and_Starters-removebg-preview.webp","/images/Batteries-removebg-preview.png","/images/Batteries-removebg-preview.webp","/images/Brakes-removebg-preview.png","/images/Brakes-removebg-preview.webp","/images/Cool Logo variation.png","/images/Cool Logo variation.webp","/images/Cool logo variation 2.png","/images/Cool logo variation 2.webp","/images/Diagonostic-removebg-preview.png","/images/Diagonostic-removebg-preview.webp","/images/Electrical and Batteries.png","/images/Electrical and Batteries.webp","/images/Electrical-removebg-preview.png","/images/Electrical-removebg-preview.webp","/images/Emergency Roadside Assistance.png","/images/Emergency Roadside Assistance.webp","/images/Engine Diagnostics.png","/images/Engine Diagnostics.webp","/images/Fuel_Systems-removebg-preview.png","/images/Fuel_Systems-removebg-preview.webp","/images/Hero image 6.png","/images/Hero image 6.webp","/images/Hydraulic_and_Suspension-removebg-preview.png","/images/Hydraulic_and_Suspension-removebg-preview.webp","/images/Mobile Diesel Repair.png","/images/Mobile Diesel Repair.webp","/images/Preventitive Maintenance.png","/images/Preventitive Maintenance.webp","/images/Suspension and Steering.png","/images/Suspension and Steering.webp","/images/Tires-removebg-preview.png","/images/Tires-removebg-preview.webp","/images/Wheel_Seals-removebg-preview.png","/images/Wheel_Seals-removebg-preview.webp","/images/az-mobile-horizontal-master.png","/images/az-mobile-horizontal-master.webp","/images/cool logo variation 3.png","/images/cool logo variation 3.webp","/images/cooling-systems-icon.png","/images/emergency-roadside-alt.png","/images/emergency-roadside-alt.webp","/images/emergency-roadside-professional.jpg","/images/mobile-mechanic-alt.png","/images/mobile-mechanic-alt.webp","/images/phoenix-metro-background.jpeg","/images/phoenix-metro-background.webp","/js/defer-init.js","/js/forms.js","/js/navigation.js","/lovable-uploads/429c6164-a811-4081-ba8b-bdacaa635fcb.png","/lovable-uploads/429c6164-a811-4081-ba8b-bdacaa635fcb.webp","/lovable-uploads/5b3f1c94-c862-422c-84cb-66b5cf9b8bc1.png","/lovable-uploads/5b3f1c94-c862-422c-84cb-66b5cf9b8bc1.webp","/lovable-uploads/89296262-e00f-4a4b-a2cf-bfbc1db441ce.png","/lovable-uploads/89296262-e00f-4a4b-a2cf-bfbc1db441ce.webp","/lovable-uploads/c9e7af09-3034-4b71-838b-d68e24373ae3.png","/lovable-uploads/c9e7af09-3034-4b71-838b-d68e24373ae3.webp","/lovable-uploads/d04f697c-da6b-4052-a780-02657cb7c140.png","/lovable-uploads/d04f697c-da6b-4052-a780-02657cb7c140.webp","/lovable-uploads/d37bfbf9-e847-4d53-86fc-ea72a51f74bd.png","/lovable-uploads/d37bfbf9-e847-4d53-86fc-ea72a51f74bd.webp","/lovable-uploads/e4ab83c8-521f-4986-b078-57259b80b263.png","/lovable-uploads/e4ab83c8-521f-4986-b078-57259b80b263.webp","/lovable-uploads/eff70c3b-1b53-4693-b587-bb51f7bfda85.png","/lovable-uploads/eff70c3b-1b53-4693-b587-bb51f7bfda85.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"L5FmFZAnIP8uvcHmhAJO852T402whHYxmxJ7roS3rNM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
