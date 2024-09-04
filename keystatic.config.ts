import { config, fields, collection } from "@keystatic/core";
import { inline, block } from "@keystatic/core/content-components";
import { tagSelection } from "src/utils/tagSelection";

export default config({
  storage: {
    kind: "github",
    repo: "IdealProject/ideal",
  },
  ui: {
    brand: {
      name: "Ideal Admin",
    },
    navigation:{
      writing: ['posts','authors','---'],
      majors: ['infor','civil','indu','electro','cpa']
    }

  },

  collections: {
    posts: collection({
      label: "Posts",
      entryLayout: "content",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Draft arent showing in the index",
        }),
        description: fields.text({
          label: "Descripción",
          description: "Ingresa la Descripción del Post",
          validation: {
            isRequired: true,
          },
          multiline: true,
        }),
        authors: fields.array(
          fields.relationship({
            label: "Autores",
            collection: "authors",
            validation: {
              isRequired: true,
            },
          }),
          {
            label: "Autores",
            itemLabel: (item: { value: any; }) => item.value || "Por Favor ingrese un autor...",
          }
        ),
        
        major: tagSelection,
        content: fields.markdoc({
          label: "Content",
          components: {

            imageLink: block({
              label: "Image Link",
              schema: {
                link: fields.url({
                  label: "Link",
                  validation: {
                    isRequired: true,
                  },
                }),
                alt: fields.text({
                  label: "Alt",
                  validation: {
                    isRequired: true,
                  },
                }),
                width: fields.text({
                  label: "Width",
                  validation: {
                    isRequired: true,
                  },
                }),
                height: fields.text({
                  label: "Height",
                  validation: {
                    isRequired: true,
                  },
                }),
              },
            }),

            blockLatex: block({
              label: "LaTex Block",
              ContentView: ({ value }) => value.formula,
              schema: {
                formula: fields.text({
                  label: "Formula",
                  description: "Enter the LaTex notation formulas",
                  multiline: false,
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
              // icon: <TexIcon />,
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
                return "Edit" + value.formula;
              },
            }),
          },
        }),
      },
    }),
    // Colección que pertenece a los autores
    authors: collection({
      label: "Autores",
      slugField: "name",
      path: "src/content/authors/*",
      format: {
        data: "json",
      },
      schema: {
        name: fields.slug({ name: { label: "Nombre" } }),
        link: fields.url({label:"Link",validation:{isRequired:true}}),
      },
    }),
    // Colección que pertenece a los Libros
    books: collection({
      label: "Books",
      slugField: "bookName",
      path: "src/content/books/*",
      format: {
        data: "json",
      },
      entryLayout: "content",
      schema: {
        bookName: fields.slug({ name: { label: "Book Name" } }),
        bookAuthor: fields.array(
          fields.text({ label: 'Autores' }),
          {
            label: 'Autor',
            itemLabel: (props: { value: any; }) => props.value
          }
        ),
        bookMajor: tagSelection,
        bookDownloadLinkId: fields.url({
          label: "Google Drive Link",
          description: "Enter the Google Drive public link",
          validation: {
            isRequired: true,
          },
        }),
      },
    }),
    infor: collection({
      label: "Ing. Informática",
      slugField: "name",
      path: "src/content/infor/*",
      format: {
        data: "json",
      },
      schema: {
        name: fields.slug({ name: { label: "Semestre" } }),
        materias: fields.array(
          fields.text({label:'Materias'}),
          {
            label: 'Materia',
            itemLabel: (props: { value: any; }) => props.value
          }
        ),
      },
    }), 
    civil: collection({
      label: "Ing. Civil",
      slugField: "name",
      path: "src/content/civil/*",
      format: {
        data: "json",
      },
      schema: {
        name: fields.slug({ name: { label: "Semestre" } }),
        materias: fields.array(
          fields.text({label:'Materias'}),
          {
            label: 'Materia',
            itemLabel: (props: { value: any; }) => props.value
          }
        ),
      },
    }), 
    indu: collection({
      label: "Ing. Industrial",
      slugField: "name",
      path: "src/content/indu/*",
      format: {
        data: "json",
      },
      schema: {
        name: fields.slug({ name: { label: "Semestre" } }),
        materias: fields.array(
          fields.text({label:'Materias'}),
          {
            label: 'Materia',
            itemLabel: (props: { value: any; }) => props.value
          }
        ),
      },
    }), 

    electro: collection({
      label: "Ing. Electromecanica",
      slugField: "name",
      path: "src/content/electro/*",
      format: {
        data: "json",
      },
      schema: {
        name: fields.slug({ name: { label: "Semestre" } }),
        materias: fields.array(
          fields.text({label:'Materias'}),
          {
            label: 'Materia',
            itemLabel: (props: { value: any; }) => props.value
          }
        ),
      },
    }),
    
    cpa: collection({
      label: "Cursillo Probatorio de A.",
      slugField: "name",
      path: "src/content/cpa/*",
      format: {
        data: "json",
      },
      schema: {
        name: fields.slug({ name: { label: "Materias" } }),
        materias: fields.array(
          fields.text({label:'Materias'}),
          {
            label: 'Materia',
            itemLabel: (props: { value: any; }) => props.value
          }
        ),
      },
    }), 
  },
});
