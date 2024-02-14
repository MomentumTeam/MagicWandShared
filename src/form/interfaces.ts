import mongoose from "mongoose";
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
import { FieldType } from "../field/enums";
import {
  ApproverStatus,
  FormSchemaPartType,
  FormSchemaType,
  SectionPartType,
  Status,
} from "./enums";
import { ObjectId } from "../general/types";

export interface IFormSchemaPart {
  type: FormSchemaPartType;
  section?: ISection;
}

export interface ISection {
  parts: ISectionPart[];
  approverRoleId?: ObjectId;
  hasBorder?: boolean;
  title?: string;
}

export interface ISectionPart {
  type: SectionPartType;
  field?: Field;
  section?: ISection;
}

type ParagraphField = { fieldType: FieldType.PARAGRAPH, fieldParams: IParagraphFieldParams }
type HeadlineField = { fieldType: FieldType.HEADLINE, fieldParams: IHeadlineFieldParams }
type ListField = { fieldType: FieldType.LIST, fieldParams: IListFieldParams }
type LogoField = { fieldType: FieldType.LOGO, fieldParams: ILogoFieldParams }
type TextField = { fieldType: FieldType.TEXT, fieldParams: ITextFieldParams }
type SignatureField = { fieldType: FieldType.SIGNATURE, fieldParams: ISignatureFieldParams }
type IdentifierField = { fieldType: FieldType.IDENTIFIER, fieldParams: IIdentifierFieldParams }
type DateField = { fieldType: FieldType.DATE, fieldParams: IDateFieldParams }
type TimeField = { fieldType: FieldType.TIME, fieldParams: ITimeFieldParams }
type NumberField = { fieldType: FieldType.NUMBER, fieldParams: INumberFieldParams }
type CheckboxField = { fieldType: FieldType.CHECKBOX, fieldParams: ICheckboxFieldParams }
type RadioField = { fieldType: FieldType.RADIO, fieldParams: IRadioFieldParams }
type DropdownField = { fieldType: FieldType.DROPDOWN, fieldParams: IDropdownFieldParams }
type TableField = { fieldType: FieldType.TABLE, fieldParams: ITableFieldParams }
type FileField = { fieldType: FieldType.FILE, fieldParams: IFileFieldParams }
type PhoneField = { fieldType: FieldType.PHONE, fieldParams: IPhoneFieldParams }

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
  | PhoneField

export type SectionField = Exclude<Field, LogoField>
export type HeaderField = Exclude<Exclude<Field, TableField>, SignatureField>[];
export type FooterField = ParagraphField[]


export interface IUser {
  firstName: string;
  lastName: string;
  hierarchy: string;
  unitId: string;
  uniqueId: ObjectId;
  identifier: string;
}

export interface IFormSchemaObject {
  formSchemaId: ObjectId;
  nextFormSchemaObject: IFormSchemaObject;
}

export interface IFormInstanceObject {
  formInstanceId: ObjectId;
  nextFormInstanceObject: IFormInstanceObject;
}

export interface IApproverStage {
  status: ApproverStatus;
  roleId: ObjectId;
  reason: string;
  user: IUser;
  updatedAt: Date;
}

export interface IInstance {
  id: ObjectId;
  displayName: string;
  serialNumber: string;
  status: Status;
  submittedBy: IUser;
  schemaId: ObjectId;
  approverStages: [IApproverStage];
}

export interface ISchema {
  id: ObjectId;
  serialNumber: string;
  name: string;
  createdBy: IUser;
  managersUniqueIds: ObjectId[];
  approversRoleIds: ObjectId[];
  unitId: ObjectId;
  categoryId: ObjectId;
}

export interface IFormInstance extends IInstance {
  status: Status;
  isSubmitterArchived: boolean;
  isActive: boolean;
  submittedAt: Date;
  answers: mongoose.Schema.Types.Mixed[];
  headerAnswers: mongoose.Schema.Types.Mixed[];
  processInstanceId: ObjectId;
}

export interface IProcessInstance extends IInstance {
  status: Status;
  submittedAt: Date;
  isSubmitterArchived: boolean;
  forms: [ObjectId];
  approverStages: [IApproverStage];
}

export interface IDraftFormInstance extends IInstance {
  answers: mongoose.Schema.Types.Mixed[];
  headerAnswers: mongoose.Schema.Types.Mixed[];
  processInstanceId: ObjectId;
}

export interface IDraftProcessInstance extends IInstance {
  forms: [ObjectId];
}

export interface IFormSchema extends ISchema {
  version: number;
  type: FormSchemaType;
  categoryId: ObjectId;
  createdBy: IUser;
  createdAt: Date;
  parts: [IFormSchemaPart];
  processSchemaId: ObjectId;
  approversRoleIds: ObjectId[];
  isActive: boolean;
  footer: [
    FooterField,
    FooterField,
    FooterField,
  ];
  header: [
    HeaderField,
    HeaderField,
    HeaderField,
    HeaderField,
    HeaderField
  ];
  greetingMessage?: string;
}

export interface IProcessSchema extends ISchema {
  version: number;
  categoryId: ObjectId;
  createdAt: Date;
  forms: [ObjectId];
}

export interface IDraftFormSchema extends ISchema {
  parts: [IFormSchemaPart];
  footer: [
    FooterField,
    FooterField,
    FooterField,
  ];
  header: [
    HeaderField,
    HeaderField,
    HeaderField,
    HeaderField,
    HeaderField
  ];
  greetingMessage?: string;
}

export interface IDraftProcessSchema extends ISchema {
  forms: [ObjectId];
}
export interface SuccessMessage {
  success: boolean;
  message: string;
}

export { Status, ApproverStatus, FieldType };
