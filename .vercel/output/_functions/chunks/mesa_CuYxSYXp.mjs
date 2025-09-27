import { n as createVNode, aw as Fragment, ax as __astro_tag_component__ } from './astro/server_b5lYJ8aU.mjs';
import 'clsx';

const frontmatter = {
  "pageType": "city",
  "title": "Mobile Diesel Mechanic — Mesa, AZ | 24/7 Roadside & On-Site",
  "city": "Mesa",
  "state": "AZ",
  "slug": "mesa",
  "corridors": ["US-60", "Loop 202"],
  "exitClusters": ["US-60 Exits 178–186", "202 Red Mountain"],
  "neighborhoods": ["Downtown Mesa", "Dobson Ranch", "Lehi", "Eastmark", "Alta Mesa", "Superstition Springs"],
  "zips": ["85201", "85202", "85203", "85204", "85205", "85209"],
  "landmarks": ["Superstition Springs Center docks", "Falcon Field", "Industrial east Mesa"],
  "heatNotes": ["Radiator failures on US-60 grades", "Event surges weekends"],
  "nearbyCities": ["Tempe", "Chandler", "Gilbert"],
  "etaMinutes": 30,
  "faqs": [{
    "question": "Do you cover US-60 and US-60 Exits 178–186?",
    "answer": "Yes, on-site within 30–50 minutes depending on traffic."
  }, {
    "question": "What if my truck has radiator failures on US-60 grades?",
    "answer": "We carry coolant, pressure test gear, and can fix hoses on-site."
  }],
  "centroid": {
    "lat": 33.4152,
    "lng": -111.8315
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
    children: "Expert mobile diesel service throughout Mesa covering US-60 and Loop 202 networks. We service the Superstition Springs Center docks and Industrial east Mesa with complete mobile repair capabilities. Radiator failures are frequent on US-60 grades, especially during summer months when cooling systems are stressed."
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
const url = "src/content/locations/mesa.mdx";
const file = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/mesa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/mesa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
