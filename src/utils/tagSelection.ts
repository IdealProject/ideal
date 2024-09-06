import { fields } from "@keystatic/core";
import { MajorSelection } from "./majorSelectionHandler";
import { cpaDataHandler,civilDataHanlder,electroDataHanlder,induDataHanlder,inforDataHanlder } from "./majorsDataHandler";

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