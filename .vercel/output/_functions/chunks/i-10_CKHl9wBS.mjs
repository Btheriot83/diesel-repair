import { o as createVNode, F as Fragment, ay as __astro_tag_component__ } from './astro/server_DXK4Mque.mjs';
import 'clsx';

/*Body sections to be expanded later with SuperClaude page outline.*/
const frontmatter = {
  "title": "Mobile Diesel Repair on I‑10 — Phoenix Metro",
  "metaTitle": "I‑10 Mobile Diesel Repair Phoenix | 24/7 Roadside Truck Mechanic",
  "metaDescription": "Stuck on I‑10 near Tolleson, Goodyear, or the Stack? 24/7 mobile diesel repair with typical ETA 30–60 minutes.",
  "canonical": "https://azmobiledieselrepair.com/corridors/i-10",
  "pageType": "corridor",
  "faqs": [{
    "question": "Do you service breakdowns on the Stack (I‑10/I‑17)?",
    "answer": "Yes — we cover the interchange and adjacent segments."
  }, {
    "question": "Can you access the shoulder safely during rush hour?",
    "answer": "We coordinate safe access and may direct you to the nearest ramp when needed."
  }],
  "breadcrumbs": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://azmobiledieselrepair.com/"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Corridors",
    "item": "https://azmobiledieselrepair.com/corridors"
  }, {
    "@type": "ListItem",
    "position": 3,
    "name": "I‑10"
  }],
  "corridors": ["i-10"],
  "nearbyCities": ["phoenix", "tolleson", "goodyear", "tempe", "chandler"],
  "relatedServices": ["emergency-roadside-assistance", "engine-diagnostics", "ac-cooling", "brakes-air-systems", "hydraulics-hoses-cylinders"],
  "hero": "/images/hero/i10-corridor.webp",
  "images": ["/images/corridors/i10/ta-goodyear.webp", "/images/corridors/i10/loves-tolleson.webp"],
  "cta": {
    "primary": "Tap‑to‑Call — I‑10 Dispatch 30–60 min"
  },
  "links": {
    "internal": ["/locations/tolleson", "/locations/avondale", "/services/emergency-roadside-assistance"]
  },
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "mobile-diesel-repair-on-i10--phoenix-metro",
    "text": "Mobile Diesel Repair on I‑10 — Phoenix Metro"
  }, {
    "depth": 2,
    "slug": "coverage--exits",
    "text": "Coverage & Exits"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "mobile-diesel-repair-on-i10--phoenix-metro",
      children: "Mobile Diesel Repair on I‑10 — Phoenix Metro"
    }), "\n", createVNode(_components.h2, {
      id: "coverage--exits",
      children: "Coverage & Exits"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "130–138 (Buckeye/Goodyear): TA Goodyear, FedEx Ground"
      }), "\n", createVNode(_components.li, {
        children: "139–147 (Avondale/Tolleson): Love’s Tolleson, Amazon GYR5"
      }), "\n", createVNode(_components.li, {
        children: "148–154 (Downtown/Stack): I‑17 Interchange, 7th Ave/7th St"
      }), "\n", createVNode(_components.li, {
        children: "155–162 (Tempe/Chandler): US‑60 split, Loop‑202"
      }), "\n"]
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

const url = "src/content/corridors/i-10.mdx";
const file = "/Users/brandontheriot/projects/Diesel Repair/src/content/corridors/i-10.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/brandontheriot/projects/Diesel Repair/src/content/corridors/i-10.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
