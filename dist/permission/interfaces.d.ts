import mongoose from "mongoose";
import { Permission } from "./enums";
export interface IPermission {
    _id: mongoose.Schema.Types.ObjectId;
    uniqueId: string;
    unitId: mongoose.Schema.Types.ObjectId;
    permissions: Permission[];
}
export type INewPermission = Omit<IPermission, "_id">;
export interface IAddToPermissions {
    id?: mongoose.Schema.Types.ObjectId;
    uniqueId?: string;
    permissions: Permission[];
}
export interface IRemoveFromPermissions {
    id?: mongoose.Schema.Types.ObjectId;
    uniqueId?: string;
    permissions: Permission[];
}
export interface IChangeUnitId {
    id?: mongoose.Schema.Types.ObjectId;
    uniqueId?: string;
    unitId: mongoose.Schema.Types.ObjectId;
}
