import { fields } from "@keystatic/core";
import { materiaCPA } from "./data/dataCpa";
export const cpaDataHandler = fields.select({
  label: "Subject",
  description: "Enter the subject of the post",
  options: materiaCPA,
  defaultValue: "Ab",
});
