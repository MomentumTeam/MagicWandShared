import { IUser } from '../authentication/interfaces';
import { ICategory } from '../category/interfaces';
import { Mixed } from '../general/types';
import { IRole } from '../role/interfaces';
import { ApproverStatus, FormSchemaPartType, FormSchemaType, SectionPartType, Status } from './enums';
import { FooterField, HeaderField, SectionField } from './types';

export interface IFormSchemaPart {
  formSchemaPartType: FormSchemaPartType;
  section?: ISection;
  approverRoleId?: string;
  approverRole?: IRole;
}

export interface ISection {
  parts: ISectionPart[];
  hasBorder?: boolean;
  title?: string;
}

export interface ISectionPart {
  sectionPartType: SectionPartType;
  field?: SectionField;
  section?: ISection;
}

export interface IFormSchemaObject {
  formSchemaId: string;
  nextFormSchemaObject: IFormSchemaObject;
}

export interface IFormInstanceObject {
  formInstanceId: string;
  nextFormInstanceObject: IFormInstanceObject;
}

export interface IApproverStage {
  status: ApproverStatus;
  roleId: string;
  reason: string;
  user: IUser;
  updatedAt: Date;
}

export interface IInstance {
  id: string;
  displayName: string;
  code: number;
  status: Status;
  submittedBy: IUser;
  schemaId: string;
  approverStages: IApproverStage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ISchema {
  id: string;
  code: number;
  name: string;
  createdBy: IUser;
  description: string;
  managersUniqueIds: string[];
  approversRoleIds: string[];
  unitId: string;
  categoryId: string;
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
  processInstanceId: string;
}

export interface ISearchFormsQuery {
  isArchived: boolean;
  search?: string;
  status?: Status;
  submittedAt?: Date;
}

export interface ISearchFormsApproverQuery extends ISearchFormsQuery {
  ApproverStatus?: ApproverStatus;
}

export interface IProcessInstance extends IInstance {
  status: Status;
  submittedAt: Date;
  isSubmitterArchived: boolean;
  forms: [IFormInstanceObject];
  approverStages: IApproverStage[];
}

export interface IDraftFormInstance extends IInstance {
  formInstanceId: string;
  answers: Mixed[];
  headerAnswers: Mixed[];
  processInstanceId: string;
}

export interface IDraftProcessInstance extends IInstance {
  forms: [IFormInstanceObject];
}

export interface IFormSchema extends ISchema {
  version: number;
  formSchemaType: FormSchemaType;
  categoryId: string;
  createdAt: Date;
  parts: [IFormSchemaPart];
  processSchemaId?: string;
  approversRoleIds: string[];
  isActive: boolean;
  footer: [FooterField[], FooterField[], FooterField[]];
  header: [HeaderField[], HeaderField[], HeaderField[], HeaderField[], HeaderField[]];
  greetingMessage?: string;
}

export interface IPopulateFormSchema extends Omit<IFormSchema, 'categoryId'> {
  category: ICategory;
}

export interface IProcessSchema extends ISchema {
  version: number;
  categoryId: string;
  createdAt: Date;
  forms: [IFormSchemaObject];
}

export interface IDraftFormSchema extends ISchema {
  parts: [IFormSchemaPart];
  footer: [FooterField[], FooterField[], FooterField[]];
  header: [HeaderField[], HeaderField[], HeaderField[], HeaderField[], HeaderField[]];
  greetingMessage?: string;
  formSchemaType: FormSchemaType;
  formSchemaId?: string;
}

export interface IDraftProcessSchema extends ISchema {
  forms: [IFormSchemaObject];
}
export interface SuccessMessage {
  success: boolean;
  message: string;
}
