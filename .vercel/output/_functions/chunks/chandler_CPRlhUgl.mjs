import { n as createVNode, aw as Fragment, ax as __astro_tag_component__ } from './astro/server_b5lYJ8aU.mjs';
import 'clsx';

const frontmatter = {
  "pageType": "city",
  "title": "Mobile Diesel Mechanic — Chandler, AZ | 24/7 Roadside & On-Site",
  "city": "Chandler",
  "state": "AZ",
  "slug": "chandler",
  "corridors": ["Loop 202 Santan", "I-10"],
  "exitClusters": ["Santan Exits 40–55", "I-10 Exits 160–162"],
  "neighborhoods": ["Ocotillo", "Sun Lakes", "Downtown", "West Chandler", "Cooper Commons", "Galveston"],
  "zips": ["85224", "85225", "85226", "85248", "85249", "85286"],
  "landmarks": ["Tech campus docks", "Santan industrial parks", "Rail spur south"],
  "heatNotes": ["Rush hour clogs at I-10 access", "Summer compressor failures"],
  "nearbyCities": ["Tempe", "Mesa", "Gilbert"],
  "etaMinutes": 30,
  "faqs": [{
    "question": "Do you cover Loop 202 Santan and Santan Exits 40–55?",
    "answer": "Yes, on-site within 30–50 minutes depending on traffic."
  }, {
    "question": "What if my truck has rush hour clogs at I-10 access?",
    "answer": "We carry coolant, pressure test gear, and can fix hoses on-site."
  }],
  "centroid": {
    "lat": 33.3062,
    "lng": -111.8413
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
    children: "Reliable mobile diesel repair serving Chandler via Loop 202 Santan and I-10 corridors. Our experienced technicians service the Tech campus docks and Santan industrial parks with complete mobile diagnostic capabilities. Summer compressor failures are common in high-tech fleet vehicles during Arizona’s extreme heat periods."
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
const url = "src/content/locations/chandler.mdx";
const file = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/chandler.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brandontheriot/projects/Diesel Repair/src/content/locations/chandler.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
