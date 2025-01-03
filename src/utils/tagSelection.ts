import { fields } from "@keystatic/core";
import { civilDataHandler } from "./civilDataHandler";
import { cpaDataHandler } from "./cpaDataHandler";
import { electroDataHandler } from "./electroDataHandler";
import { induDataHandler } from "./induDataHandler";
import { inforDataHandler } from "./inforDataHandler";
import { MajorSelection } from "./majorSelectionHandler";
import { cbiDataHandler } from "./CBIDataHandler";

export const tagSelection = fields.conditional(
  MajorSelection, //Component Field from MajorSelectionHandler
  {
    //cpa field
    cpa: cpaDataHandler,
    //Infor field
    infor: inforDataHandler,
    // Indu field
    indu: induDataHandler,
    // Civil field
    civil: civilDataHandler,
    // Electro field
    electro: electroDataHandler,
    // CBI field
    cbi: cbiDataHandler
  },
);
