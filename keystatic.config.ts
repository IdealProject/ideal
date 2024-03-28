import { config, fields, collection, component } from "@keystatic/core";
import { inline, block } from "@keystatic/core/content-components";
const majorOptions = [
  { label: "Informática", value: "infor" },
  { label: "Electromecánica", value: "electro" },
  { label: "Civil", value: "civil" },
  { label: "Industrial", value: "indu" },
  { label: "CPA", value: "cpa" },
];

const semesterOptions = [
  { label: "Primer Semestre", value: "1" },
  { label: "Segundo Semestre", value: "2" },
  { label: "Tercer Semestre", value: "3" },
  { label: "Cuarto Semestre", value: "4" },
  { label: "Quinto Semestre", value: "5" },
  { label: "Sexto Semestre", value: "6" },
  { label: "Séptimo Semestre", value: "7" },
  { label: "Octavo Semestre", value: "8" },
  { label: "Noveno Semestre", value: "9" },
  { label: "Décimo Semestre", value: "10" },
];
const materiaCPA = [
  { label: "Álgebra", value: "Algebra" },
  { label: "Aritmética", value: "Aritmetica" },
  { label: "Física", value: "Fisica" },
  { label: "Geometría Analítica", value: "Geometria" },
  { label: "Programación", value: "Programacion" },
  { label: "Trigonometría", value: "Trigonometria" }
];
const materiaInfor1er = [
  { label: 'Fisica 1', value: 'F1' },
  { label: 'Arquitectura y Componentes', value: 'Arq1' },
  { label: 'Introducción a la Programación 1', value: 'P1' },
  { label: 'Comunicación Técnica 1', value: 'C1' },
  { label: 'Análisis 1', value: 'A1' },

];

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
            itemLabel: (item) => item.value || "Por Favor ingrese un autor...",
          }
        ),
        major: fields.conditional(
          fields.select({
            label: "Major",
            description: "Select the major",
            options: majorOptions,
            defaultValue: "cpa",
          }),
          {
            cpa: fields.select(
              {
                label: "Subject",
                description: "Enter the subject of the post",
                options: materiaCPA,
                defaultValue: 'Algebra'
              }
            ),
            infor: fields.blocks(
              {
                semester: {
                  label: 'Semester',
                  schema: fields.select(
                    {
                      label: 'Semester',
                      description: 'Enter the Semester of the post',
                      options: semesterOptions,
                      defaultValue: '1'
                    }),
                  itemLabel: (item) => item.schema.label || "Semester",
                },
                subject: {
                  label: 'Subject',
                  schema: fields.select(
                    {
                      label: 'Subject',
                      description: 'Enter the Subject of the post',
                      options: materiaInfor1er,
                      defaultValue: 'F1'
                    }),
                  itemLabel: (item) => item.schema.label || "Materia",

                }
              }, { label: 'Details' }
            ),
            indu: fields.select({
              label: "Semester",
              description: "Select the semester",
              options: semesterOptions,
              defaultValue: "1",
            }),
            civil: fields.select({
              label: "Semester",
              description: "Select the semester",
              options: semesterOptions,
              defaultValue: "1",
            }),
            electro: fields.select({
              label: "Semester",
              description: "Select the semester",
              options: semesterOptions,
              defaultValue: "1",
            }),
          }
        ),
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
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images/avatars",
          publicPath: "images/avatars",
        }),
        links: fields.array(
          fields.url({ label: "Links", validation: { isRequired: true } }),
          {
            label: "Link",
            itemLabel: (props) => props.value || "",
          }
        ),
      },
    }),
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
        bookAuthor: fields.text({
          label: "Author",
          validation: { isRequired: true },
        }),
        bookSubject: fields.array(fields.text({ label: "Subject" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
        bookMajor: fields.select({
          label: "Major",
          description: "Select the major",
          options: majorOptions,
          defaultValue: "cpa",
        }),
        bookDownloadLinkId: fields.url({
          label: "Google Drive Link",
          description: "Enter the Google Drive public link",
          validation: {
            isRequired: true,
          },
        }),
      },

    }),
  },
});
