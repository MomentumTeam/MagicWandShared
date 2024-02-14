import {
  ICheckboxFieldParams,
  IDateFieldParams,
  IDropdownFieldParams,
  IFileFieldParams,
  IHeadlineFieldParams,
  IIdentifierFieldParams,
  IListFieldParams,
  ILogoFieldParams,
  INumberFieldParams,
  IParagraphFieldParams,
  IPhoneFieldParams,
  IRadioFieldParams,
  ISignatureFieldParams,
  ITableFieldParams,
  ITextFieldParams,
  ITimeFieldParams,
} from "../field/interfaces";
import { FieldType } from "./interfaces";

type ParagraphField = {
  fieldType: FieldType.PARAGRAPH;
  fieldParams: IParagraphFieldParams;
};
type HeadlineField = {
  fieldType: FieldType.HEADLINE;
  fieldParams: IHeadlineFieldParams;
};
type ListField = { fieldType: FieldType.LIST; fieldParams: IListFieldParams };
type LogoField = { fieldType: FieldType.LOGO; fieldParams: ILogoFieldParams };
type TextField = { fieldType: FieldType.TEXT; fieldParams: ITextFieldParams };
type SignatureField = {
  fieldType: FieldType.SIGNATURE;
  fieldParams: ISignatureFieldParams;
};
type IdentifierField = {
  fieldType: FieldType.IDENTIFIER;
  fieldParams: IIdentifierFieldParams;
};
type DateField = { fieldType: FieldType.DATE; fieldParams: IDateFieldParams };
type TimeField = { fieldType: FieldType.TIME; fieldParams: ITimeFieldParams };
type NumberField = {
  fieldType: FieldType.NUMBER;
  fieldParams: INumberFieldParams;
};
type CheckboxField = {
  fieldType: FieldType.CHECKBOX;
  fieldParams: ICheckboxFieldParams;
};
type RadioField = {
  fieldType: FieldType.RADIO;
  fieldParams: IRadioFieldParams;
};
type DropdownField = {
  fieldType: FieldType.DROPDOWN;
  fieldParams: IDropdownFieldParams;
};
type TableField = {
  fieldType: FieldType.TABLE;
  fieldParams: ITableFieldParams;
};
type FileField = { fieldType: FieldType.FILE; fieldParams: IFileFieldParams };
type PhoneField = {
  fieldType: FieldType.PHONE;
  fieldParams: IPhoneFieldParams;
};

export type Field =
  | ParagraphField
  | HeadlineField
  | ListField
  | LogoField
  | TextField
  | SignatureField
  | IdentifierField
  | DateField
  | TimeField
  | NumberField
  | CheckboxField
  | RadioField
  | DropdownField
  | TableField
  | FileField
  | PhoneField;

export type SectionField = Exclude<Field, LogoField>;
export type HeaderField = Exclude<Exclude<Field, TableField>, SignatureField>[];
export type FooterField = ParagraphField[];
