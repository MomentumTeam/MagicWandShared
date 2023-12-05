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
    hierarchy: String
    unitId: String
    uniqueId: mongoose.Schema.Types.ObjectId
    identifier: String
}

export interface IFormSchemaObject {
    formSchemaId: mongoose.Schema.Types.ObjectId
    nextFormSchemaObject: IFormSchemaObject
}

export interface IFormInstanceObject {
    formInstanceId: mongoose.Schema.Types.ObjectId
    nextFormInstanceObject: IFormInstanceObject
}

export interface IApproverStage {
    status: ApproverStatus
    roleId: mongoose.Schema.Types.ObjectId
    reason: String
    user: IUser
    updatedAt: Date
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
    displayName: String,
    serialNumber: String,
    status: Status,
    submittedBy: IUser,
    schemaId: mongoose.Schema.Types.ObjectId,
    approverStages: [IApproverStage]
}

export interface ISchema {
    id: mongoose.Schema.Types.ObjectId,
    serialNumber: String,
    name: String,
    createdBy: IUser,
    managersUniqueIds: [mongoose.Schema.Types.ObjectId],
    approversRoleIds: [mongoose.Schema.Types.ObjectId],
    unitId: mongoose.Schema.Types.ObjectId,
    categoryId: mongoose.Schema.Types.ObjectId
}

export interface IFormInstance extends IInstance {
    status: Status,
    isSubmitterArchived: Boolean,
    isActive: Boolean,
    submittedAt: Date,
    answers: mongoose.Schema.Types.Array,
    headerAnswers: mongoose.Schema.Types.Array,
    processInstanceId: mongoose.Schema.Types.ObjectId,
}

export interface IProcessInstance extends IInstance {
    status: Status,
    submittedAt: Date,
    isSubmitterArchived: Boolean,
    forms: [mongoose.Schema.Types.ObjectId]
    approverStages: [IApproverStage],
}

export interface IDraftFormInstance extends IInstance {
    answers: mongoose.Schema.Types.Array,
    headerAnswers: mongoose.Schema.Types.Array,
    processInstanceId: mongoose.Schema.Types.ObjectId,
}

export interface IDraftProcessInstance extends IInstance {
    forms: [mongoose.Schema.Types.ObjectId]
}

export interface IFormSchema extends ISchema {
    version: Number,
    type: FormSchemaType,
    categoryId: mongoose.Schema.Types.ObjectId,
    createdBy: IUser
    createdAt: Date,
    parts: [IFormSchemaPart],
    processSchemaId: mongoose.Schema.Types.ObjectId,
    approversRoleIds: [mongoose.Schema.Types.ObjectId]
    isActive: Boolean,
    foot: {
        type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>
    }[][5],
    footer: { type: IField, fieldType: FieldType.PARAGRAPH }[][3],
    header: { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>}[][5],
    grettingMessage: String
}

export interface IProcessSchema extends ISchema {
    version: Number,
    categoryId: mongoose.Schema.Types.ObjectId,
    createdAt: Date,
    forms: [mongoose.Schema.Types.ObjectId]

}

export interface IDraftFormSchema extends ISchema {
    parts: [IFormSchemaPart],
    footer: { type: FieldType.PARAGRAPH }[][3],
    header: { type: Exclude<FieldType.TABLE, FieldType.SIGNATURE>}[][5],
    grettingMessage: String
}

export interface IDraftProcessSchema extends ISchema {
    forms: [mongoose.Schema.Types.ObjectId]
}
export interface SuccessMessage {
    success: Boolean,
    message: String,
}