import { n as createVNode, aw as Fragment, ax as __astro_tag_component__ } from './astro/server_b5lYJ8aU.mjs';
import 'clsx';

const frontmatter = {
  "pageType": "city",
  "title": "Mobile Diesel Mechanic — Tempe, AZ | 24/7 Roadside & On-Site",
  "city": "Tempe",
  "state": "AZ",
  "slug": "tempe",
  "corridors": ["Loop 202", "Loop 101"],
  "exitClusters": ["202/101 Interchange", "202 Exits 6–9"],
  "neighborhoods": ["Downtown Tempe", "Rio Salado", "North Tempe", "South Tempe", "McClintock", "Rural"],
  "zips": ["85281", "85282", "85283", "85284", "85280", "85285"],
  "landmarks": ["Tempe Town Lake bridges", "Industrial park south of 202", "Rail spur"],
  "heatNotes": ["Afternoon backups near 101/202", "Summer vapor lock risk in surface lots"],
  "nearbyCities": ["Phoenix", "Mesa", "Scottsdale"],
  "etaMinutes": 25,
  "faqs": [{
    "question": "Do you cover Loop 202 and the 202/101 Interchange?",
    "answer": "Yes, on-site within 25–45 minutes depending on traffic."
  }, {
    "question": "What if my truck overheats during afternoon backups near 101/202?",
    "answer": "We carry coolant, pressure test gear, and can fix hoses on-site."
  }],
  "centroid": {
    "lat": 33.4255,
    "lng": -111.94
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "Professional mobile diesel repair serving Tempe via Loop 202 and Loop 101 corridors. Our certified technicians respond to the Industrial park south of 202 and surrounding areas with full diagnostic equipment. Summer vapor lock risks are common in surface lots, but we’re equipped to handle cooling system failures on-site."
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/locations/tempe.mdx";
const file = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/tempe.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/tempe.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
