import { fields } from "@keystatic/core";

import { majorOptions } from "./data/dataMajor";

export const MajorSelection = fields.select({
  label: "Major",
  description: "Select the major",
  options: majorOptions,
  defaultValue: "cpa",
});
