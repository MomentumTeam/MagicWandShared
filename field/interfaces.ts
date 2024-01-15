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

export interface ParagraphFieldParams {
  text: String;
}

export interface HeadlineFieldParams {
  text: String;
}

export interface ListFieldParams {
  title: HtmlString;
  items: HtmlString[];
  itemMarker: ListFieldItemMarker;
}

export interface LogoFieldParams {
  logoType: LogoType;
}

export interface TextFieldParams {
  required: Boolean;
  title: HtmlString;
  description: String;
  size: TextFieldSize;
  minLength: Number;
  maxLength: Number;
}

export interface SignatureFieldParams {
  required: Boolean;
  title: HtmlString;
}

export interface IdentifierFieldParams {
  required: Boolean;
  title: HtmlString;
  description: String;
  identifierType: IdentifierFieldType;
}

export interface DateFieldParams {
  required: Boolean;
  title: HtmlString;
  description: String;
  autoComplete: Boolean;
  dateRestriction: DateFieldRestrictionType;
  dateFormat: DateFieldFormat;
}

export interface TimeFieldParams {
  title: HtmlString;
  description: String;
  required: Boolean;
  autoComplete: Boolean;
  timeFormat: TimeFieldFormat;
}

export interface NumberFieldParams {
  title: HtmlString;
  description: String;
  required: Boolean;
  minValue: Number;
  maxValue: Number;
}

export interface CheckboxFieldParams {
  title: HtmlString;
  required: Boolean;
  options: HtmlString[];
  hasOther: Boolean;
  canFillOther: Boolean;
  layout: OptionsLayout;
}

export interface RadioFieldParams {
  title: HtmlString;
  required: Boolean;
  options: HtmlString[];
  hasOther: Boolean;
  canFillOther: Boolean;
  layout: OptionsLayout;
}

export interface DropdownFieldParams {
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

export interface TableFieldParams {
  title: HtmlString;
  required: Boolean;
  onlyForView: Boolean;
  canAddRows: Boolean;
  columns: IColumn[];
}

export interface FileFieldParams {
  title: HtmlString;
  required: Boolean;
  description: String;
}

export interface PhoneFieldParams {
  title: HtmlString;
  required: Boolean;
  description: String;
}

export type HtmlString = String;
