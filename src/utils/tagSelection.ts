import { fields } from "@keystatic/core";
import { civilDataHanlder } from "./civilDataHandler";
import { cpaDataHandler } from "./cpaDataHandler";
import { electroDataHanlder } from "./electroDataHandler";
import { induDataHanlder } from "./induDataHandler";
import { inforDataHanlder } from "./inforDataHandler";
import { MajorSelection } from "./majorSelectionHandler";

import { getCollection } from "astro:content";
const civil = getCollection("infor");

export const tagSelection = fields.conditional(
    MajorSelection, //Component Field from MajorSelectionHandler
    {








        // //cpa field 
        // cpa: cpaDataHandler,
        // //Infor field
        // infor: inforDataHanlder,
        // // Indu field
        // indu: induDataHanlder,
        // // Civil field
        // civil: civilDataHanlder,
        // // Electro field
        // electro: electroDataHanlder,
    }
)