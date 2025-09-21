import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DXK4Mque.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_COTkCVMy.mjs';
import { g as getEntryBySlug, a as getCollection } from '../../chunks/_astro_content_BDqkREBY.mjs';
import { b as buildInternalLinks } from '../../chunks/linkBuilder_D8uZyhee.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://azmobiledieselrepair.com");
async function getStaticPaths() {
  const entries = await getCollection("corridors");
  return entries.map((e) => ({ params: { slug: e.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntryBySlug("corridors", slug);
  if (!entry) throw new Error(`Corridor not found: ${slug}`);
  const rendered = await entry.render();
  const { Content } = rendered;
  const data = entry.data;
  const links = buildInternalLinks(data);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": data.title, "metaTitle": data.metaTitle, "metaDescription": data.metaDescription, "canonical": data.canonical, "pageType": data.pageType, "faqs": data.faqs, "breadcrumbs": data.breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose max-w-none"> ${renderComponent($$result2, "Content", Content, {})} <!-- Emergency CTA Section --> <div class="my-8 p-6 bg-red-50 border border-red-200 rounded-lg"> <h2 class="text-xl font-bold text-red-800 mb-4">Need Emergency Service?</h2> <a${addAttribute(links.emergencyLink.href, "href")} class="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"> ${links.emergencyLink.text} </a> </div> <!-- Related Links Sections --> ${links.corridorLinks.length > 0 && renderTemplate`<div class="my-8"> <h3 class="text-lg font-semibold mb-4">Related Corridors</h3> <ul class="list-disc list-inside space-y-2"> ${links.corridorLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-blue-600 hover:text-blue-800 underline"> ${link.text} </a> </li>`)} </ul> </div>`} ${links.cityLinks.length > 0 && renderTemplate`<div class="my-8"> <h3 class="text-lg font-semibold mb-4">Cities Served</h3> <ul class="list-disc list-inside space-y-2"> ${links.cityLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-blue-600 hover:text-blue-800 underline"> ${link.text} </a> </li>`)} </ul> </div>`} ${links.serviceLinks.length > 0 && renderTemplate`<div class="my-8"> <h3 class="text-lg font-semibold mb-4">Available Services</h3> <ul class="list-disc list-inside space-y-2"> ${links.serviceLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-blue-600 hover:text-blue-800 underline"> ${link.text} </a> </li>`)} </ul> </div>`} </article> ` })}`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/pages/corridors/[slug].astro", void 0);

const $$file = "/Users/brandontheriot/projects/Diesel Repair/src/pages/corridors/[slug].astro";
const $$url = "/corridors/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
