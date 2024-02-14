import { Field, ISection } from "../form/interfaces";
import { TemplateType } from "./enums";

export interface ITemplate {
    name: string;
    muliIcon: string;
    type: TemplateType;
    field?: Field;
    section?: ISection;
}