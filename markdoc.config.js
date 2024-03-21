import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    latex: {
      render: component("@components/Latex.astro"), // Replace '@components/Latex.astro' with the actual path to your LaTeX component
      attributes: {
        // Define attributes if needed
        formula: { type: String, required: true },
        display: { type: String, default: inline },
      },
    },
  },
});
