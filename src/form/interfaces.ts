import mongoose, { PopulatedDoc } from "mongoose";
import { FieldType } from "../field/enums";
import {
  ApproverStatus,
  FormSchemaPartType,
  FormSchemaType,
  SectionPartType,
  Status,
} from "./enums";
import { IRole } from "../role/interfaces";
import { Mixed, ObjectId } from "../general/types";
import { FooterField, HeaderField, SectionField } from "./types";

export interface IFormSchemaPart {
  type: FormSchemaPartType;
  section?: ISection;
  approverRoleId?: ObjectId;
  approverRole?: IRole;
}

export interface ISection {
  parts: ISectionPart[];
  hasBorder?: boolean;
  title?: string;
}

export interface ISectionPart {
  type: SectionPartType;
  field?: SectionField;
  section?: ISection;
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
  code: string;
  status: Status;
  submittedBy: IUser;
  schemaId: ObjectId;
  approverStages: IApproverStage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ISchema {
  id: ObjectId;
  code: string;
  name: string;
  createdBy: IUser;
  managersUniqueIds: ObjectId[];
  approversRoleIds: ObjectId[];
  unitId: ObjectId;
  categoryId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFormInstance extends IInstance {
  status: Status;
  isSubmitterArchived: boolean;
  isActive: boolean;
  submittedAt: Date;
  answers: Mixed[];
  headerAnswers: Mixed[];
  processInstanceId: ObjectId;
}

export interface IProcessInstance extends IInstance {
  status: Status;
  submittedAt: Date;
  isSubmitterArchived: boolean;
  forms: [
    IFormInstanceObject
  ];
  approverStages: IApproverStage[];
}

export interface IDraftFormInstance extends IInstance {
  formInstanceId: mongoose.Schema.Types.ObjectId;
  answers: Mixed[];
  headerAnswers: Mixed[];
  processInstanceId: ObjectId;
}

export interface IDraftProcessInstance extends IInstance {
  forms: [IFormInstanceObject];
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
  forms: [IFormSchemaObject];
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
  forms: [IFormSchemaObject];
}
export interface SuccessMessage {
  success: boolean;
  message: string;
}

export { Status, ApproverStatus, FieldType };
