import { ApproverStatus, ColumnType, FieldType, FormSchemaType, SectionPartType, Status, tableFieldCellAlignment, tableFieldCellBackgroundColor } from './enums'
import mongoose from 'mongoose';
import {
    PARAGRAPH,
    HEADLINE,
    LIST,
    LOGO,
    TEXT,
    SIGNATURE,
    IDENTIFIER,
    DATE,
    TIME,
    NUMBER,
    CHECKBOX,
    RADIO,
    DROPDOWN,
    TABLE,
    FILE,
    PHONE
} from './formFieldsInterfaces'
export interface IFormSchemaPart {
    type: FormSchemaType,
    section: ISection
}

export interface ISection {
    parts: ISectionPart[]
    approverRoleId: mongoose.Schema.Types.ObjectId,
    hasBorder: boolean,
    title: string
}


export interface ISectionPart {
    type: SectionPartType
    field: IField
    section: ISection
}

export interface IField {
    type: Exclude<FieldType, FieldType.LOGO>,
    fieldParmas: PARAGRAPH |
    HEADLINE |
    LIST |
    LOGO |
    TEXT |
    SIGNATURE |
    IDENTIFIER |
    DATE |
    TIME |
    NUMBER |
    CHECKBOX |
    RADIO |
    DROPDOWN |
    TABLE |
    FILE |
    PHONE //ask carmel what does she think
}

export interface IUser {
    firstName: String
    lastName: String
    identityCard: String
    hierarchy: String
    unitId: String
    uniqueId: mongoose.Schema.Types.ObjectId
    personalNumber: String
}

export interface IFormSchemaObject {
    formSchemaId: mongoose.Schema.Types.ObjectId
    nextFormSchemaObject: IFormSchemaObject
}

export interface IFormInstanceObject {
    formInstanceId: mongoose.Schema.Types.ObjectId
    nextFormInstanceObject: IFormInstanceObject
}

export interface IApprover {
    status: ApproverStatus
    roleId: mongoose.Schema.Types.ObjectId
    reason: String
    user: IUser
}

export interface IColumnTable {
    titleCell: ICell
    type: ColumnType
    field: IField
    minValue: Number
    maxValue: Number
    options: String[]
    cells: ICell[]
}

export interface ICell {
    defaultValue: String
    locked: Boolean
    required: Boolean
    bold: Boolean
    alignment: tableFieldCellAlignment
    backgroundColor: tableFieldCellBackgroundColor
    mergeRight: Boolean
    mergeDown: Boolean
}


export interface IInstance {
    id: mongoose.Schema.Types.ObjectId,
    code: String,
    status: Status,
    submittedBy: IUser,
    submittedAt: Date,
    schemaId: mongoose.Schema.Types.ObjectId,
    approver: IApprover,
    isSubmitterArchived: Boolean,
    forms: [mongoose.Schema.Types.ObjectId],
    displayName: String,
    isActive: Boolean,
    answers: [any],
    headerAnswers: [any],
    processInstanceId: mongoose.Schema.Types.ObjectId,
    approvers: [IApprover],
}

export interface ISchema {
    id: mongoose.Schema.Types.ObjectId,
    code: String,
    type: FormSchemaType,
    categoryId: mongoose.Schema.Types.ObjectId,
    name: String,
    createdAt: Date,
    createdBy: IUser,
    managersUniqueIds: [mongoose.Schema.Types.ObjectId],
    approversRoleIds: [mongoose.Schema.Types.ObjectId],
    parts: IFormSchemaPart[],
    footer: IField[][3], //field type PARAGRAPH!
    header: IField[][5], // Exclude<FieldType, FieldType.TABLE, FieldType.SIGNATURE>
    unitId: mongoose.Schema.Types.ObjectId,
    isActive: Boolean,
    version: Number,
    forms: [mongoose.Schema.Types.ObjectId],
}

export interface IFormInstance {
    id: mongoose.Schema.Types.ObjectId,
    code: String,
    displayName: String,
    status: Status,
    formSchemaId: mongoose.Schema.Types.ObjectId,
    isSubmitterArchived: Boolean,
    isActive: Boolean,
    submittedBy: IUser,
    submittedAt: Date,
    answers: [any],
    headerAnswers: [any],
    processInstanceId: mongoose.Schema.Types.ObjectId,
    approvers: [IApprover],
}

export interface SuccessMessage {
    success: Boolean,
    message: String,
}