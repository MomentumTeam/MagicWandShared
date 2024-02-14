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
  field?: IField;
  section?: ISection;
}

export interface IField {
  fieldType: FieldType;
  fieldParams:
    | IParagraphFieldParams
    | IHeadlineFieldParams
    | IListFieldParams
    | ILogoFieldParams
    | ITextFieldParams
    | ISignatureFieldParams
    | IIdentifierFieldParams
    | IDateFieldParams
    | ITimeFieldParams
    | INumberFieldParams
    | ICheckboxFieldParams
    | IRadioFieldParams
    | IDropdownFieldParams
    | ITableFieldParams
    | IFileFieldParams
    | IPhoneFieldParams;
}

export interface ISectionField extends IField {
  fieldType: Exclude<FieldType, FieldType.LOGO>;
}

export interface IHeaderField extends IField {
  fieldType: Exclude<Exclude<FieldType, FieldType.TABLE>, FieldType.SIGNATURE>;
}

export interface IFooterField extends IField {
  fieldType: FieldType.PARAGRAPH;
}

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
    null | { type: IField; fieldType: FieldType.PARAGRAPH },
    null | { type: IField; fieldType: FieldType.PARAGRAPH },
    null | { type: IField; fieldType: FieldType.PARAGRAPH }
  ];
  header: [
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> },
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> },
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> },
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> },
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> }
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
    null | { type: IField; fieldType: FieldType.PARAGRAPH },
    null | { type: IField; fieldType: FieldType.PARAGRAPH },
    null | { type: IField; fieldType: FieldType.PARAGRAPH }
  ];
  header: [
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> },
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> },
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> },
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> },
    null | { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> }
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
