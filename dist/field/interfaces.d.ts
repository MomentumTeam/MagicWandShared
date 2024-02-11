/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose from 'mongoose';
import { ListFieldItemMarker, TextFieldSize, IdentifierFieldType, DateFieldFormat, DateFieldRestrictionType, TimeFieldFormat, OptionsLayout, ColumnType, TableFieldCellAlignment, TableFieldCellBackgroundColor } from "./enums";
import { IField } from "../form/interfaces";
export interface IParagraphFieldParams {
    text: string;
}
export interface IHeadlineFieldParams {
    text: string;
}
export interface IListFieldParams {
    items: HtmlString[];
    itemMarker: ListFieldItemMarker;
    title?: HtmlString;
}
export interface ILogoFieldParams {
    logoId: mongoose.Schema.Types.ObjectId;
}
export interface ITextFieldParams {
    size: TextFieldSize;
    required?: boolean;
    title?: HtmlString;
    description?: string;
    minLength?: number;
    maxLength?: number;
}
export interface ISignatureFieldParams {
    required?: boolean;
    title?: HtmlString;
}
export interface IIdentifierFieldParams {
    identifierType: IdentifierFieldType;
    required?: boolean;
    title?: HtmlString;
    description?: string;
    autoComplete?: boolean;
}
export interface IDateFieldParams {
    dateFormat: DateFieldFormat;
    required?: boolean;
    title?: HtmlString;
    description?: string;
    autoComplete?: boolean;
    dateRestriction?: DateFieldRestrictionType;
}
export interface ITimeFieldParams {
    timeFormat: TimeFieldFormat;
    title?: HtmlString;
    description?: string;
    required?: boolean;
    autoComplete?: boolean;
}
export interface INumberFieldParams {
    title?: HtmlString;
    description?: string;
    required?: boolean;
    minValue?: number;
    maxValue?: number;
}
export interface ICheckboxFieldParams {
    options: HtmlString[];
    layout: OptionsLayout;
    title?: HtmlString;
    required?: boolean;
    hasOther?: boolean;
    canFillOther?: boolean;
}
export interface IRadioFieldParams {
    options: HtmlString[];
    layout: OptionsLayout;
    title?: HtmlString;
    required?: boolean;
    hasOther?: boolean;
    canFillOther?: boolean;
}
export interface IDropdownFieldParams {
    options: HtmlString[];
    layout: OptionsLayout;
    title?: HtmlString;
    required?: boolean;
}
export interface ICell {
    alignment: TableFieldCellAlignment;
    defaultValue?: string;
    locked?: boolean;
    required?: boolean;
    bold?: boolean;
    backgroundColor?: TableFieldCellBackgroundColor;
    mergeRight?: boolean;
    mergeDown?: boolean;
}
export interface IColumn {
    cells: ICell[];
    titleCell: ICell;
    type: ColumnType;
    field?: IField;
    minValue?: number;
    maxValue?: number;
    options?: string[];
}
export interface ITableFieldParams {
    columns: IColumn[];
    title?: HtmlString;
    required?: boolean;
    onlyForView?: boolean;
    canAddRows?: boolean;
}
export interface IFileFieldParams {
    title?: HtmlString;
    required?: boolean;
    description?: string;
}
export interface IPhoneFieldParams {
    title?: HtmlString;
    required?: boolean;
    description?: string;
}
export type HtmlString = string;
