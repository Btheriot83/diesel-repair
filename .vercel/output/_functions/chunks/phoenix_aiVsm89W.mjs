import { n as createVNode, aw as Fragment, ax as __astro_tag_component__ } from './astro/server_b5lYJ8aU.mjs';
import 'clsx';

const frontmatter = {
  "pageType": "city",
  "title": "Mobile Diesel Mechanic — Phoenix, AZ | 24/7 Roadside & On-Site",
  "city": "Phoenix",
  "state": "AZ",
  "slug": "phoenix",
  "corridors": ["I-10", "I-17", "Loop 101"],
  "exitClusters": ["I-10 Exits 133–138", "I-17 Exits 199–203"],
  "neighborhoods": ["Downtown", "Encanto", "Maryvale", "Deer Valley", "Ahwatukee", "Arcadia"],
  "zips": ["85003", "85004", "85007", "85009", "85021", "85044"],
  "landmarks": ["The Stack Interchange", "Sky Harbor cargo", "UP Railyard"],
  "heatNotes": ["Summer overheat on I-17 grades", "Dust storms reduce visibility on I-10"],
  "nearbyCities": ["Tempe", "Glendale", "Scottsdale"],
  "etaMinutes": 25,
  "faqs": [{
    "question": "Do you cover I-10 and I-17 through Phoenix?",
    "answer": "Yes, on-site within 25–45 minutes depending on traffic."
  }, {
    "question": "Can you handle summer overheat issues on I-17 grades?",
    "answer": "Absolutely, we carry extra coolant and can pressure-test systems on-site for emergency cooling."
  }],
  "metaTitle": "Mobile Diesel Mechanic Phoenix | 24/7 On‑Site Truck Repair",
  "metaDescription": "Mobile diesel repair in Phoenix with 24/7 emergency dispatch. Serving I‑10, I‑17, and the Stack interchange.",
  "canonical": "https://azmobiledieselrepair.com/locations/phoenix",
  "centroid": {
    "lat": 33.4484,
    "lng": -112.074
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
    children: "Professional mobile diesel repair serving Phoenix via I-10, I-17, and Loop 101 corridors. Our certified technicians respond to The Stack Interchange, Sky Harbor cargo areas, and UP Railyard with complete mobile diagnostic capabilities. Summer overheating is common on I-17 grades during Arizona’s extreme heat periods."
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
const url = "src/content/locations/phoenix.mdx";
const file = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/phoenix.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/phoenix.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
