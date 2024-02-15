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
import { RoleType, Rank } from "./enums";
export interface IRole {
    _id: mongoose.Types.ObjectId;
    unitId?: mongoose.Types.ObjectId;
    name?: string;
    isStaffed?: boolean;
    type: RoleType;
    basicRoleId?: mongoose.Types.ObjectId;
    isActive?: boolean;
    ranks?: Rank[];
    uniqueIds?: string[];
}
export type INewRole = Omit<IRole, "_id">;
export interface IUpdateRole {
    name?: string;
    isActive?: boolean;
    ranks?: Rank[];
    uniqueIds?: string[];
}
