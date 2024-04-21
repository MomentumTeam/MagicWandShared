import { ICheckboxFieldParams, IDateFieldParams, IDropdownFieldParams, IFileFieldParams, IHeadlineFieldParams, IIdentifierFieldParams, IListFieldParams, ILogoFieldParams, INumberFieldParams, IParagraphFieldParams, IPhoneFieldParams, IRadioFieldParams, ISignatureFieldParams, ITableFieldParams, ITextFieldParams, ITimeFieldParams } from "../field/interfaces";
import { FieldType } from "./interfaces";
export type ParagraphField = {
    fieldType: FieldType.PARAGRAPH;
    fieldParams: IParagraphFieldParams;
};
export type HeadlineField = {
    fieldType: FieldType.HEADLINE;
    fieldParams: IHeadlineFieldParams;
};
export type ListField = {
    fieldType: FieldType.LIST;
    fieldParams: IListFieldParams;
};
export type LogoField = {
    fieldType: FieldType.LOGO;
    fieldParams: ILogoFieldParams;
};
export type TextField = {
    fieldType: FieldType.TEXT;
    fieldParams: ITextFieldParams;
};
export type SignatureField = {
    fieldType: FieldType.SIGNATURE;
    fieldParams: ISignatureFieldParams;
};
export type IdentifierField = {
    fieldType: FieldType.IDENTIFIER;
    fieldParams: IIdentifierFieldParams;
};
export type DateField = {
    fieldType: FieldType.DATE;
    fieldParams: IDateFieldParams;
};
export type TimeField = {
    fieldType: FieldType.TIME;
    fieldParams: ITimeFieldParams;
};
export type NumberField = {
    fieldType: FieldType.NUMBER;
    fieldParams: INumberFieldParams;
};
export type CheckboxField = {
    fieldType: FieldType.CHECKBOX;
    fieldParams: ICheckboxFieldParams;
};
export type RadioField = {
    fieldType: FieldType.RADIO;
    fieldParams: IRadioFieldParams;
};
export type DropdownField = {
    fieldType: FieldType.DROPDOWN;
    fieldParams: IDropdownFieldParams;
};
export type TableField = {
    fieldType: FieldType.TABLE;
    fieldParams: ITableFieldParams;
};
export type FileField = {
    fieldType: FieldType.FILE;
    fieldParams: IFileFieldParams;
};
export type PhoneField = {
    fieldType: FieldType.PHONE;
    fieldParams: IPhoneFieldParams;
};
export type Field = ParagraphField | HeadlineField | ListField | LogoField | TextField | SignatureField | IdentifierField | DateField | TimeField | NumberField | CheckboxField | RadioField | DropdownField | TableField | FileField | PhoneField;
export type SectionField = Exclude<Field, LogoField>;
export type HeaderField = Exclude<Exclude<Field, TableField>, SignatureField>[];
export type FooterField = ParagraphField[];
