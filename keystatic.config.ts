import { config, fields, collection } from "@keystatic/core";
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
const ingInforData = {
  sem1: [{ label: 'Fisica 1', value: 'F1' }, { label: 'Arquitectura y Componentes', value: 'Arq1' }, { label: 'Introducción a la Programación 1', value: 'P1' }, { label: 'Comunicación Técnica 1', value: 'C1' }, { label: 'Análisis 1', value: 'A1' }],
  sem2: [{ label: 'Fisica 2', value: 'F2' }, { label: 'Matemática Discreta', value: 'Dis' }, { label: 'Introducción a la Programación 2', value: 'P2' }, { label: 'Comunicación Técnica 2', value: 'C2' }, { label: 'Análisis 2', value: 'A2' }],
  sem3: [],
  sem4: [],
  sem5: [],
  sem6: [],
  sem7: [],
  sem8: [],
  sem9: [],
  sem10: [],
};
const materiaCPA = [
  { label: "Álgebra", value: "Algebra" },
  { label: "Aritmética", value: "Aritmetica" },
  { label: "Física", value: "Fisica" },
  { label: "Geometría Analítica", value: "Geometria" },
  { label: "Programación", value: "Programacion" },
  { label: "Trigonometría", value: "Trigonometria" }
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
          description: "Draft arent showing in the index of the post",
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
            infor: fields.conditional(
              fields.select(
                {
                  label: "Semestre",
                  description: "Select the semester",
                  options: semesterOptions,
                  defaultValue: "1",
                }
              ), {
              1: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem1,
                defaultValue: 'F1'
              }
              ),
              2: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem2,
                defaultValue: 'F2'
              }
              ),
              3: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem1,
                defaultValue: 'F1'
              }
              ),
              4: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem1,
                defaultValue: 'F1'
              }
              ),
              5: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem1,
                defaultValue: 'F1'
              }
              ),
              6: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem1,
                defaultValue: 'F1'
              }
              ),
              7: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem1,
                defaultValue: 'F1'
              }
              ),
              8: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem1,
                defaultValue: 'F1'
              }
              ),
              9: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem1,
                defaultValue: 'F1'
              }
              ),
              10: fields.select({
                label: "Subject",
                description: "Enter the subject of the post",
                options: ingInforData.sem1,
                defaultValue: 'F1'
              }
              ),
            }
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
