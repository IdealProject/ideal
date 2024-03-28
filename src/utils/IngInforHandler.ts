import { config, fields, collection } from "@keystatic/core";

import { inline, block } from "@keystatic/core/content-components";

import { majorOptions, semesterOptions, materiaCPA, materiaInfor1er, materiaInfor2do } from "./data";

export const MajorSelection = fields.select({
    label: "Major",
    description: "Select the major",
    options: majorOptions,
    defaultValue: "cpa",
});
