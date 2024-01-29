import mongoose from 'mongoose';
import {
  ListFieldItemMarker,
  TextFieldSize,
  IdentifierFieldType,
  DateFieldFormat,
  DateFieldRestrictionType,
  TimeFieldFormat,
  OptionsLayout,
  ColumnType,
  TableFieldCellAlignment,
  TableFieldCellBackgroundColor,
} from "./enums";
import { IField } from "../form/interfaces";

export interface IParagraphFieldParams {
  text: String;
}

export interface IHeadlineFieldParams {
  text: String;
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
  required?: Boolean;
  title?: HtmlString;
  description?: String;
  minLength?: Number;
  maxLength?: Number;
}

export interface ISignatureFieldParams {
  required?: Boolean;
  title?: HtmlString;
}

export interface IIdentifierFieldParams {
  identifierType: IdentifierFieldType;
  required?: Boolean;
  title?: HtmlString;
  description?: String;
  autoComplete?: Boolean;
}

export interface IDateFieldParams {
  dateFormat: DateFieldFormat;
  required?: Boolean;
  title?: HtmlString;
  description?: String;
  autoComplete?: Boolean;
  dateRestriction?: DateFieldRestrictionType;
}

export interface ITimeFieldParams {
  timeFormat: TimeFieldFormat;
  title?: HtmlString;
  description?: String;
  required?: Boolean;
  autoComplete?: Boolean;
}

export interface INumberFieldParams {
  title?: HtmlString;
  description?: String;
  required?: Boolean;
  minValue?: Number;
  maxValue?: Number;
}

export interface ICheckboxFieldParams {
  options: HtmlString[];
  layout: OptionsLayout;
  title?: HtmlString;
  required?: Boolean;
  hasOther?: Boolean;
  canFillOther?: Boolean;
}

export interface IRadioFieldParams {
  options: HtmlString[];
  layout: OptionsLayout;
  title?: HtmlString;
  required?: Boolean;
  hasOther?: Boolean;
  canFillOther?: Boolean;
}

export interface IDropdownFieldParams {
  options: HtmlString[];
  layout: OptionsLayout;
  title?: HtmlString;
  required?: Boolean;
}

export interface ICell {
  alignment: TableFieldCellAlignment;
  defaultValue?: String;
  locked?: Boolean;
  required?: Boolean;
  bold?: Boolean;
  backgroundColor?: TableFieldCellBackgroundColor;
  mergeRight?: Boolean;
  mergeDown?: Boolean;
}

export interface IColumn {
  cells: ICell[];
  titleCell: ICell;
  type: ColumnType;
  field?: IField;
  minValue?: Number;
  maxValue?: Number;
  options?: String[];
}

export interface ITableFieldParams {
  columns: IColumn[];
  title?: HtmlString;
  required?: Boolean;
  onlyForView?: Boolean;
  canAddRows?: Boolean;
}

export interface IFileFieldParams {
  title?: HtmlString;
  required?: Boolean;
  description?: String;
}

export interface IPhoneFieldParams {
  title?: HtmlString;
  required?: Boolean;
  description?: String;
}

export type HtmlString = String;
