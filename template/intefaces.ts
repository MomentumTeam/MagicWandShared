import { IField, ISection } from "magicwand-shared";
import { TemplateType } from "./enums";

export interface ITemplate {
    name: string;
    muliIcon: string;
    type: TemplateType;
    field?: IField;
    section?: ISection;
}