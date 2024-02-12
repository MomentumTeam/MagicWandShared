import { IField, ISection } from "../../../../MagicWandShared/form/interfaces";
import { TemplateType } from "./enums";

export interface ITemplate {
    name: string;
    muliIcon: string;
    type: TemplateType;
    field?: IField;
    section?: ISection;
}