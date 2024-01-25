import mongoose from 'mongoose';
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
} from '../field/interfaces';
import { FieldType } from '../field/enums';
import { ApproverStatus, FormSchemaType, SectionPartType, Status } from './enums';

export interface IFormSchemaPart {
  type: FormSchemaType;
  section: ISection;
}

export interface ISection {
  parts: ISectionPart[];
  approverRoleId: mongoose.Schema.Types.ObjectId;
  hasBorder: boolean;
  title: string;
}

export interface ISectionPart {
  type: SectionPartType;
  field: IField;
  section: ISection;
}

export interface IField {
  type: Exclude<FieldType, FieldType.LOGO>;
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

export interface IUser {
  firstName: String;
  lastName: String;
  hierarchy: String;
  unitId: String;
  uniqueId: mongoose.Schema.Types.ObjectId;
  identifier: String;
}

export interface IFormSchemaObject {
  formSchemaId: mongoose.Schema.Types.ObjectId;
  nextFormSchemaObject: IFormSchemaObject;
}

export interface IFormInstanceObject {
  formInstanceId: mongoose.Schema.Types.ObjectId;
  nextFormInstanceObject: IFormInstanceObject;
}

export interface IApproverStage {
  status: ApproverStatus;
  roleId: mongoose.Schema.Types.ObjectId;
  reason: String;
  user: IUser;
  updatedAt: Date;
}

export interface IInstance {
  id: mongoose.Schema.Types.ObjectId;
  displayName: String;
  serialNumber: String;
  status: Status;
  submittedBy: IUser;
  schemaId: mongoose.Schema.Types.ObjectId;
  approverStages: [IApproverStage];
}

export interface ISchema {
  id: mongoose.Schema.Types.ObjectId;
  serialNumber: String;
  name: String;
  createdBy: IUser;
  managersUniqueIds: [mongoose.Schema.Types.ObjectId];
  approversRoleIds: [mongoose.Schema.Types.ObjectId];
  unitId: mongoose.Schema.Types.ObjectId;
  categoryId: mongoose.Schema.Types.ObjectId;
}

export interface IFormInstance extends IInstance {
  status: Status;
  isSubmitterArchived: Boolean;
  isActive: Boolean;
  submittedAt: Date;
  answers: mongoose.Schema.Types.Mixed[];
  headerAnswers: mongoose.Schema.Types.Mixed[];
  processInstanceId: mongoose.Schema.Types.ObjectId;
}

export interface IProcessInstance extends IInstance {
  status: Status;
  submittedAt: Date;
  isSubmitterArchived: Boolean;
  forms: [mongoose.Schema.Types.ObjectId];
  approverStages: [IApproverStage];
}

export interface IDraftFormInstance extends IInstance {
  answers: mongoose.Schema.Types.Mixed[];
  headerAnswers: mongoose.Schema.Types.Mixed[];
  processInstanceId: mongoose.Schema.Types.ObjectId;
}

export interface IDraftProcessInstance extends IInstance {
  forms: [mongoose.Schema.Types.ObjectId];
}

export interface IFormSchema extends ISchema {
  version: Number;
  type: FormSchemaType;
  categoryId: mongoose.Schema.Types.ObjectId;
  createdBy: IUser;
  createdAt: Date;
  parts: [IFormSchemaPart];
  processSchemaId: mongoose.Schema.Types.ObjectId;
  approversRoleIds: [mongoose.Schema.Types.ObjectId];
  isActive: Boolean;
  foot: {
    type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
  }[][5];
  footer: { type: IField; fieldType: FieldType.PARAGRAPH }[][3];
  header: { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> }[][5];
  grettingMessage: String;
}

export interface IProcessSchema extends ISchema {
  version: Number;
  categoryId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  forms: [mongoose.Schema.Types.ObjectId];
}

export interface IDraftFormSchema extends ISchema {
  parts: [IFormSchemaPart];
  footer: { type: FieldType.PARAGRAPH }[][3];
  header: { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE> }[][5];
  grettingMessage: String;
}

export interface IDraftProcessSchema extends ISchema {
  forms: [mongoose.Schema.Types.ObjectId];
}
export interface SuccessMessage {
  success: Boolean;
  message: String;
}
