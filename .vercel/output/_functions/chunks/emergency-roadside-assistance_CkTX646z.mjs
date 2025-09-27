import { n as createVNode, aw as Fragment, ax as __astro_tag_component__ } from './astro/server_b5lYJ8aU.mjs';
import 'clsx';

/*Body content to be generated later with SuperClaude page outline.*/
const frontmatter = {
  "title": "Emergency Roadside Assistance — Phoenix",
  "metaTitle": "24/7 Emergency Mobile Diesel Repair | Phoenix AZ",
  "metaDescription": "Stuck on I‑10 or I‑17? 24/7 dispatch for mobile diesel breakdowns across Phoenix. Typical ETA 30–60 minutes.",
  "canonical": "https://azmobiledieselrepair.com/services/emergency-roadside-assistance",
  "pageType": "service",
  "service": {
    "name": "Emergency Roadside Assistance",
    "description": "On‑site mobile diesel repair covering I‑10, I‑17, and the Loop 101/202/303 corridors in Phoenix metro.",
    "areaServed": ["Phoenix", "Mesa", "Chandler", "Glendale", "Tempe", "Avondale", "Tolleson", "Goodyear", "Surprise", "Buckeye"]
  },
  "faqs": [{
    "question": "Do you provide after‑hours emergency service?",
    "answer": "Yes — 24/7 dispatch. Typical ETA is 30–60 minutes depending on traffic and segment."
  }, {
    "question": "Can you perform roadside hydraulic hose fixes?",
    "answer": "Yes. We stock common sizes and can crimp hoses roadside."
  }],
  "breadcrumbs": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://azmobiledieselrepair.com/"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Services",
    "item": "https://azmobiledieselrepair.com/services"
  }, {
    "@type": "ListItem",
    "position": 3,
    "name": "Emergency Roadside Assistance"
  }],
  "corridors": ["i-10", "i-17", "loop-101"],
  "nearbyCities": ["phoenix", "tolleson", "avondale"],
  "relatedServices": ["engine-diagnostics", "brakes-air-systems", "hydraulics-hoses-cylinders"],
  "hero": "/images/hero/emergency-roadside.webp",
  "images": ["/images/services/emergency/dispatch-truck.webp", "/images/services/emergency/roadside-repair.webp"],
  "cta": {
    "primary": "Tap‑to‑Call — Dispatch in 30–60 minutes"
  },
  "links": {
    "internal": ["/locations/phoenix", "/corridors/i-10", "/services/engine-diagnostics"]
  },
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "emergency-roadside-assistance--phoenix",
    "text": "Emergency Roadside Assistance — Phoenix"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "emergency-roadside-assistance--phoenix",
      children: "Emergency Roadside Assistance — Phoenix"
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

const url = "src/content/services/emergency-roadside-assistance.mdx";
const file = "/Users/brandontheriot/projects/Diesel Repair/src/content/services/emergency-roadside-assistance.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brandontheriot/projects/Diesel Repair/src/content/services/emergency-roadside-assistance.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
