import { defineMarkdocConfig, component, nodes } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";
import prism from "@astrojs/markdoc/prism";

export default defineMarkdocConfig({
  nodes: {
    heading: {
      ...nodes.heading,
    },
  },
  tags: {
    imageLink: {
      render: component("@components/ImagesRender.astro"),
      attributes: {
        link: { type: String, required: true },
        alt: { type: String, required: true },
        width: { type: String, required: true },
        height: { type: String, required: true },
      },
    },
    blockLatex: {
      render: component("@components/BlockLatex.astro"),
      attributes: {
        formula: { type: String, required: true },
      },
    },
    inlineLatex: {
      render: component("@components/InlineLatex.astro"),
      attributes: {
        formula: { type: String, required: true },
      },
    },
  },
  extends: [
    prism(),
  ],
});
