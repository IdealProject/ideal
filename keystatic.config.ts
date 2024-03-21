import { config, fields, collection, component } from "@keystatic/core";
import { inline, block } from "@keystatic/core/content-components";

export default config({
  storage: {
    kind: "github",
    repo: "IdealProject/ideal",
  },
  ui: {
    brand: {
      name: "Ideal Admin",
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        // content: fields.document({
        //   label: "Content",
        //   formatting: true,
        //   dividers: true,
        //   links: true,
        //   images: {
        //     directory: "src/assets/images/posts",
        //     publicPath: "../../assets/images/posts/",
        //   },
        //   componentBlocks: {
        //     latex: component({
        //       label: "LaTex Formula",
        //       schema: {
        //         formula: fields.text({
        //           label: "LaTex Formula",
        //           description: "Enter your LaTex formula here",
        //           validation: {
        //             length: { min: 1 },
        //             isRequired: true,
        //           },
        //         }),

        //         display: fields.select({
        //           label: "LaTex Notation Display Mode",
        //           description:
        //             "The mode in which the LaTex formula will be displayed",
        //           options: [
        //             { label: "Inline", value: "inline" },
        //             { label: "Block", value: "block" },
        //           ],
        //           defaultValue: "inline",
        //         }),
        //       },
        //       preview: () => null,
        //     }),
        //   },
        // }),
        content: fields.markdoc({
          label: "Content",
          components: {
            blockLatex: block({
              label: "LaTex Block",
              ContentView: ({ value }) => value.formula,
              schema: {
                formula: fields.text({
                  label: "Formula",
                  description: "Enter the LaTex notation formula",
                  multiline: true,
                  validation: {
                    isRequired: true,
                    length: {
                      min: 1,
                    },
                  },
                }),
              },
            }),
            inlineLatex: inline({
              label: "LaTex Inline",
              schema: {
                formula: fields.text({
                  label: "Formula",
                  description: "Enter the LaTex notation formula",
                  validation: {
                    isRequired: true,
                    length: {
                      min: 1,
                    },
                  },
                }),
              },
              NodeView: ({ value }) => {
                return `Click Me to edit!!: ${value.formula}`;
              },
            }),
          },
        }),
        authors: fields.array(
          fields.relationship({
            label: "Authors",
            collection: "authors",
            validation: {
              isRequired: true,
            },
          }),
          {
            label: "Authors",
            itemLabel: (item) => item.value || "Please select a author",
          }
        ),
      },
    }),
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "src/content/authors/*",
      format: { data: "json" },
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images/avatars",
          publicPath: "/images/avatars",
        }),
        showcase: fields.blocks(
          {
            link: {
              label: "Link",
              schema: fields.object({
                label: fields.text({
                  label: "Label",
                  validation: { length: { min: 1 } },
                }),
                url: fields.url({ label: "URL" }),
              }),
              itemLabel: (item) => {
                return item.fields.label.value;
              },
            },
          },
          { label: "Tus links" }
        ),
      },
    }),
  },
});
