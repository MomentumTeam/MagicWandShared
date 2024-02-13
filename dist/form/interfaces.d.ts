/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose from "mongoose";
import { ICheckboxFieldParams, IDateFieldParams, IDropdownFieldParams, IFileFieldParams, IHeadlineFieldParams, IIdentifierFieldParams, IListFieldParams, ILogoFieldParams, INumberFieldParams, IParagraphFieldParams, IPhoneFieldParams, IRadioFieldParams, ISignatureFieldParams, ITableFieldParams, ITextFieldParams, ITimeFieldParams } from "../field/interfaces";
import { FieldType } from "../field/enums";
import { ApproverStatus, FormSchemaPartType, FormSchemaType, SectionPartType, Status } from "./enums";
export interface IFormSchemaPart {
    type: FormSchemaPartType;
    section?: ISection;
}
export interface ISection {
    parts: ISectionPart[];
    approverRoleId?: mongoose.Schema.Types.ObjectId;
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
    fieldParams: IParagraphFieldParams | IHeadlineFieldParams | IListFieldParams | ILogoFieldParams | ITextFieldParams | ISignatureFieldParams | IIdentifierFieldParams | IDateFieldParams | ITimeFieldParams | INumberFieldParams | ICheckboxFieldParams | IRadioFieldParams | IDropdownFieldParams | ITableFieldParams | IFileFieldParams | IPhoneFieldParams;
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
    uniqueId: mongoose.Schema.Types.ObjectId;
    identifier: string;
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
    reason: string;
    user: IUser;
    updatedAt: Date;
}
export interface IInstance {
    id: mongoose.Schema.Types.ObjectId;
    displayName: string;
    serialNumber: string;
    status: Status;
    submittedBy: IUser;
    schemaId: mongoose.Schema.Types.ObjectId;
    approverStages: [IApproverStage];
}
export interface ISchema {
    id: mongoose.Schema.Types.ObjectId;
    serialNumber: string;
    name: string;
    createdBy: IUser;
    managersUniqueIds: mongoose.Schema.Types.ObjectId[];
    approversRoleIds: mongoose.Schema.Types.ObjectId[];
    unitId: mongoose.Schema.Types.ObjectId;
    categoryId: mongoose.Schema.Types.ObjectId;
}
export interface IFormInstance extends IInstance {
    status: Status;
    isSubmitterArchived: boolean;
    isActive: boolean;
    submittedAt: Date;
    answers: mongoose.Schema.Types.Mixed[];
    headerAnswers: mongoose.Schema.Types.Mixed[];
    processInstanceId: mongoose.Schema.Types.ObjectId;
}
export interface IProcessInstance extends IInstance {
    status: Status;
    submittedAt: Date;
    isSubmitterArchived: boolean;
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
    version: number;
    type: FormSchemaType;
    categoryId: mongoose.Schema.Types.ObjectId;
    createdBy: IUser;
    createdAt: Date;
    parts: [IFormSchemaPart];
    processSchemaId: mongoose.Schema.Types.ObjectId;
    approversRoleIds: mongoose.Schema.Types.ObjectId[];
    isActive: boolean;
    footer: [
        null | {
            type: IField;
            fieldType: FieldType.PARAGRAPH;
        },
        null | {
            type: IField;
            fieldType: FieldType.PARAGRAPH;
        },
        null | {
            type: IField;
            fieldType: FieldType.PARAGRAPH;
        }
    ];
    header: [
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        },
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        },
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        },
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        },
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        }
    ];
    greetingMessage?: string;
}
export interface IProcessSchema extends ISchema {
    version: number;
    categoryId: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
    forms: [mongoose.Schema.Types.ObjectId];
}
export interface IDraftFormSchema extends ISchema {
    parts: [IFormSchemaPart];
    footer: [
        null | {
            type: IField;
            fieldType: FieldType.PARAGRAPH;
        },
        null | {
            type: IField;
            fieldType: FieldType.PARAGRAPH;
        },
        null | {
            type: IField;
            fieldType: FieldType.PARAGRAPH;
        }
    ];
    header: [
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        },
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        },
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        },
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        },
        null | {
            type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>;
        }
    ];
    greetingMessage?: string;
}
export interface IDraftProcessSchema extends ISchema {
    forms: [mongoose.Schema.Types.ObjectId];
}
export interface SuccessMessage {
    success: boolean;
    message: string;
}
export { Status, ApproverStatus, FieldType };
