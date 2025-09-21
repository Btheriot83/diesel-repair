import { o as createVNode, F as Fragment, ay as __astro_tag_component__ } from './astro/server_DXK4Mque.mjs';
import 'clsx';

/*Body content to be generated later with SuperClaude page outline.*/
const frontmatter = {
  "title": "Mobile Diesel Mechanic — Phoenix, AZ",
  "metaTitle": "Mobile Diesel Mechanic Phoenix | 24/7 On‑Site Truck Repair",
  "metaDescription": "Mobile diesel repair in Phoenix with 24/7 emergency dispatch. Serving I‑10, I‑17, and the Stack interchange.",
  "canonical": "https://azmobiledieselrepair.com/locations/phoenix",
  "pageType": "city",
  "faqs": [{
    "question": "What’s your response time inside Phoenix city limits?",
    "answer": "Typically 30–60 minutes depending on traffic and segment."
  }, {
    "question": "Do you service the Sky Harbor airport area?",
    "answer": "Yes — we regularly cover Sky Harbor and nearby logistics corridors."
  }],
  "breadcrumbs": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://azmobiledieselrepair.com/"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Locations",
    "item": "https://azmobiledieselrepair.com/locations"
  }, {
    "@type": "ListItem",
    "position": 3,
    "name": "Phoenix"
  }],
  "corridors": ["i-10", "i-17", "loop-101", "loop-202"],
  "nearbyCities": ["tempe", "glendale", "avondale"],
  "relatedServices": ["emergency-roadside-assistance", "engine-diagnostics", "ac-cooling"],
  "hero": "/images/hero/phoenix.webp",
  "images": ["/images/locations/phoenix/downtown-stack.webp", "/images/locations/phoenix/yard-service.webp"],
  "cta": {
    "primary": "Tap‑to‑Call — Phoenix Dispatch"
  },
  "links": {
    "internal": ["/services/emergency-roadside-assistance", "/corridors/i-10", "/services/ac-cooling"]
  },
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "mobile-diesel-mechanic--phoenix-az",
    "text": "Mobile Diesel Mechanic — Phoenix, AZ"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "mobile-diesel-mechanic--phoenix-az",
      children: "Mobile Diesel Mechanic — Phoenix, AZ"
    }), "\n"]
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

const url = "src/content/cities/phoenix.mdx";
const file = "/Users/brandontheriot/projects/Diesel Repair/src/content/cities/phoenix.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brandontheriot/projects/Diesel Repair/src/content/cities/phoenix.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
