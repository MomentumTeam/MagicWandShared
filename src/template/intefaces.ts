import { ISection } from "../form/interfaces";
import { Field } from "../form/types";
import { TemplateType } from "./enums";

export interface ITemplate {
    name: string;
    muliIcon: string;
    type: TemplateType;
    field?: Field;
    section?: ISection;
}