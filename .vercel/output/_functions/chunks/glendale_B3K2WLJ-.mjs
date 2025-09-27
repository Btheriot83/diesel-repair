import { n as createVNode, aw as Fragment, ax as __astro_tag_component__ } from './astro/server_b5lYJ8aU.mjs';
import 'clsx';

const frontmatter = {
  "pageType": "city",
  "title": "Mobile Diesel Mechanic — Glendale, AZ | 24/7 Roadside & On-Site",
  "city": "Glendale",
  "state": "AZ",
  "slug": "glendale",
  "corridors": ["Loop 101 Agua Fria", "I-17"],
  "exitClusters": ["101 Exits 7–12", "I-17 Exits 210–214"],
  "neighborhoods": ["Arrowhead", "Catlin Court", "Westgate", "Manistee Ranch", "Deer Valley", "Sahuaro"],
  "zips": ["85301", "85302", "85303", "85304", "85305", "85308"],
  "landmarks": ["Stadium district docks", "Westgate logistics", "BNSF spur"],
  "heatNotes": ["Evening event surges near stadium", "Alternator heat-soak issues"],
  "nearbyCities": ["Phoenix", "Peoria", "Avondale"],
  "etaMinutes": 28,
  "faqs": [{
    "question": "Do you cover Loop 101 Agua Fria and 101 Exits 7–12?",
    "answer": "Yes, on-site within 28–48 minutes depending on traffic."
  }, {
    "question": "What if my truck has evening event surges near stadium?",
    "answer": "We carry coolant, pressure test gear, and can fix hoses on-site."
  }],
  "centroid": {
    "lat": 33.5387,
    "lng": -112.186
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
    children: "Comprehensive mobile diesel service throughout Glendale covering Loop 101 Agua Fria and I-17 networks. We specialize in servicing the Stadium district docks and Westgate logistics with full mobile repair solutions. Alternator heat-soak issues are frequent during Arizona summers, particularly in high-traffic entertainment district areas."
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
const url = "src/content/locations/glendale.mdx";
const file = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/glendale.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/glendale.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
