import { Field } from '../form/types';
import {
  ColumnType,
  DateFieldFormat,
  DateFieldRestrictionType,
  IdentifierFieldType,
  ListFieldItemMarker,
  OptionsLayout,
  TableFieldCellAlignment,
  TableFieldCellBackgroundColor,
  TextFieldSize,
  TimeFieldFormat,
} from './enums';
import { HtmlString } from './types';

export interface IParagraphFieldParams {
  text: HtmlString;
}

export interface IHeadlineFieldParams {
  text: HtmlString;
}

export interface IListFieldParams {
  items: HtmlString[];
  itemMarker: ListFieldItemMarker;
  title?: HtmlString;
  layout: OptionsLayout;
  description?: string;
}

export interface ILogoFieldParams {
  logoId: string;
}

export interface ITextFieldParams {
  size: TextFieldSize;
  title: HtmlString;
  required?: boolean;
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
  title: HtmlString;
  description?: string;
  required?: boolean;
  autoComplete?: boolean;
}

export interface INumberFieldParams {
  title: HtmlString;
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
  field?: Field;
  minValue?: number;
  maxValue?: number;
  options?: string[];
}

export interface ITableFieldParams {
  columns: IColumn[];
  title?: HtmlString;
  description?: string;
  required?: boolean;
  onlyForView?: boolean;
  canAddRows?: boolean;
}

export interface IFileFieldParams {
  title: HtmlString;
  required?: boolean;
  description?: string;
}

export interface IPhoneFieldParams {
  title?: HtmlString;
  required?: boolean;
  description?: string;
}
