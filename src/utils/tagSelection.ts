import { fields } from "@keystatic/core";
import { MajorSelection } from "./majorSelectionHandler";
import { cpaDataHandler } from "./cpaHandler";
import { inforDataHanlder } from "./inforHandler";
import { induDataHanlder } from "./induHandler";
import { civilDataHanlder } from "./civilHandler";
import { electroDataHanlder } from "./electroHandler";
export const tagSelection = fields.conditional(
    MajorSelection, //Component Field from MajorSelectionHandler
    {
        //cpa field 
        cpa: cpaDataHandler,
        //Infor field
        infor: inforDataHanlder,
        // Indu field
        indu: induDataHanlder,
        // Civil field
        civil: civilDataHanlder,
        // Electro field
        electro: electroDataHanlder,
    }
)