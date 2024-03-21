import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
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
});
