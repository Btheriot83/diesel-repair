import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DXK4Mque.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_COTkCVMy.mjs';
import { g as getEntryBySlug, a as getCollection } from '../../chunks/_astro_content_BDqkREBY.mjs';
import { b as buildInternalLinks } from '../../chunks/linkBuilder_D8uZyhee.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://azmobiledieselrepair.com");
async function getStaticPaths() {
  const entries = await getCollection("services");
  return entries.map((e) => ({ params: { slug: e.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntryBySlug("services", slug);
  if (!entry) throw new Error(`Service not found: ${slug}`);
  const rendered = await entry.render();
  const { Content, headings } = rendered;
  const data = entry.data;
  const links = buildInternalLinks(data);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": data.title, "metaTitle": data.metaTitle, "metaDescription": data.metaDescription, "canonical": data.canonical, "pageType": data.pageType, "service": data.service, "faqs": data.faqs, "breadcrumbs": data.breadcrumbs, "reviews": data.reviews }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose max-w-none"> ${renderComponent($$result2, "Content", Content, {})} <!-- Emergency CTA Section --> <div class="my-8 p-6 bg-red-50 border border-red-200 rounded-lg"> <h2 class="text-xl font-bold text-red-800 mb-4">Need Emergency Service?</h2> <a${addAttribute(links.emergencyLink.href, "href")} class="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"> ${links.emergencyLink.text} </a> </div> <!-- Related Links Sections --> ${links.corridorLinks.length > 0 && renderTemplate`<div class="my-8"> <h3 class="text-lg font-semibold mb-4">Service Corridors</h3> <ul class="list-disc list-inside space-y-2"> ${links.corridorLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-blue-600 hover:text-blue-800 underline"> ${link.text} </a> </li>`)} </ul> </div>`} ${links.cityLinks.length > 0 && renderTemplate`<div class="my-8"> <h3 class="text-lg font-semibold mb-4">Service Areas</h3> <ul class="list-disc list-inside space-y-2"> ${links.cityLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-blue-600 hover:text-blue-800 underline"> ${link.text} </a> </li>`)} </ul> </div>`} ${links.serviceLinks.length > 0 && renderTemplate`<div class="my-8"> <h3 class="text-lg font-semibold mb-4">Related Services</h3> <ul class="list-disc list-inside space-y-2"> ${links.serviceLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-blue-600 hover:text-blue-800 underline"> ${link.text} </a> </li>`)} </ul> </div>`} </article> ` })}`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/pages/services/[slug].astro", void 0);

const $$file = "/Users/brandontheriot/projects/Diesel Repair/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
