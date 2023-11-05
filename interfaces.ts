import { ApproverStatus, ColumnType, FieldType, FormSchemaType, SectionPartType, tableFieldCellAlignment, tableFieldCellBackgroundColor, Status } from './enums'
import mongoose, { Types } from 'mongoose';
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
} from '../magicwand-interfaces/formFieldsInterfaces'

export interface IFormSchemaPart {
    type: FormSchemaType,
    section: ISection
}

export interface ISection {
    parts: ISectionPart[]
    approverRoleId: Types.ObjectId,
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
    uniqueId: Types.ObjectId
    personalNumber: String
}

export interface IFormSchemaObject {
    formSchemaId: Types.ObjectId
    nextFormSchemaObject: IFormSchemaObject
}

export interface IFormInstanceObject {
    formInstanceId: Types.ObjectId
    nextFormInstanceObject: IFormInstanceObject
}

export interface IApprover {
    status: ApproverStatus
    roleId: Types.ObjectId
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


export interface IForm {
    code: String
    displayName: String
    status: Status
    formSchemaId: mongoose.Schema.Types.ObjectId
    isActive: Boolean
    submittedBy: IUser
    submittedAt: Date
    answers: any[]
    headerAnswers: any[]
    isSubmitterArchived: Boolean
    processInstanceId: mongoose.Schema.Types.ObjectId
    approvers: IApprover[]
}
