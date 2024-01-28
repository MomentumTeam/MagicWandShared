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
} from './enums';
import { LogoType } from '../logo/enums';
import { IField } from '../form/interfaces';

export interface IParagraphFieldParams {
  text: String;
}

export interface IHeadlineFieldParams {
  text: String;
}

export interface IListFieldParams {
  title: HtmlString;
  items: HtmlString[];
  itemMarker: ListFieldItemMarker;
}

export interface ILogoFieldParams {
  logoType: LogoType;
}

export interface ITextFieldParams {
  required: Boolean;
  title: HtmlString;
  description: String;
  size: TextFieldSize;
  minLength: Number;
  maxLength: Number;
}

export interface ISignatureFieldParams {
  required: Boolean;
  title: HtmlString;
}

export interface IIdentifierFieldParams {
  required: Boolean;
  title: HtmlString;
  description: String;
  identifierType: IdentifierFieldType;
  autoComplete: Boolean;
}

export interface IDateFieldParams {
  required: Boolean;
  title: HtmlString;
  description: String;
  autoComplete: Boolean;
  dateRestriction: DateFieldRestrictionType;
  dateFormat: DateFieldFormat;
}

export interface ITimeFieldParams {
  title: HtmlString;
  description: String;
  required: Boolean;
  autoComplete: Boolean;
  timeFormat: TimeFieldFormat;
}

export interface INumberFieldParams {
  title: HtmlString;
  description: String;
  required: Boolean;
  minValue: Number;
  maxValue: Number;
}

export interface ICheckboxFieldParams {
  title: HtmlString;
  required: Boolean;
  options: HtmlString[];
  hasOther: Boolean;
  canFillOther: Boolean;
  layout: OptionsLayout;
}

export interface IRadioFieldParams {
  title: HtmlString;
  required: Boolean;
  options: HtmlString[];
  hasOther: Boolean;
  canFillOther: Boolean;
  layout: OptionsLayout;
}

export interface IDropdownFieldParams {
  title: HtmlString;
  required: Boolean;
  options: HtmlString[];
  layout: OptionsLayout;
}

export interface ICell {
  defaultValue: String;
  locked: Boolean;
  required: Boolean;
  bold: Boolean;
  alignment: TableFieldCellAlignment;
  backgroundColor: TableFieldCellBackgroundColor;
  mergeRight: Boolean;
  mergeDown: Boolean;
}

export interface IColumn {
  titleCell: ICell;
  type: ColumnType;
  field: IField;
  minValue: Number;
  maxValue: Number;
  options: String[];
  cells: ICell[];
}

export interface ITableFieldParams {
  title: HtmlString;
  required: Boolean;
  onlyForView: Boolean;
  canAddRows: Boolean;
  columns: IColumn[];
}

export interface IFileFieldParams {
  title: HtmlString;
  required: Boolean;
  description: String;
}

export interface IPhoneFieldParams {
  title: HtmlString;
  required: Boolean;
  description: String;
}

export type HtmlString = String;
