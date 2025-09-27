import { n as createVNode, aw as Fragment, ax as __astro_tag_component__ } from './astro/server_b5lYJ8aU.mjs';
import 'clsx';

const frontmatter = {
  "pageType": "city",
  "title": "Mobile Diesel Mechanic — Scottsdale, AZ | 24/7 Roadside & On-Site",
  "city": "Scottsdale",
  "state": "AZ",
  "slug": "scottsdale",
  "corridors": ["Loop 101", "Loop 202"],
  "exitClusters": ["101 Exits 34–44", "101 Exits 45–48"],
  "neighborhoods": ["Old Town", "North Scottsdale", "McCormick Ranch", "DC Ranch", "Gainey Ranch", "Scottsdale Airpark"],
  "zips": ["85250", "85251", "85254", "85255", "85257", "85258"],
  "landmarks": ["Airpark cargo", "Industrial north Scottsdale", "Distribution bays"],
  "heatNotes": ["High idle heat in summer", "Tourist event spikes on weekends"],
  "nearbyCities": ["Phoenix", "Tempe", "Paradise Valley"],
  "etaMinutes": 27,
  "faqs": [{
    "question": "Do you cover Loop 101 Pima and 101 Exits 34–44?",
    "answer": "Yes, on-site within 27–47 minutes depending on traffic."
  }, {
    "question": "What if my truck has high idle heat in summer?",
    "answer": "We carry coolant, pressure test gear, and can fix hoses on-site."
  }],
  "centroid": {
    "lat": 33.4942,
    "lng": -111.9261
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
    children: "Premium mobile diesel repair serving Scottsdale via Loop 101 Pima corridor system. Our certified technicians respond to Airpark cargo and Industrial north Scottsdale facilities with advanced diagnostic equipment. High idle heat issues are prevalent during summer months, especially during tourist event spikes when vehicles experience extended operation periods."
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
const url = "src/content/locations/scottsdale.mdx";
const file = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/scottsdale.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/scottsdale.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
