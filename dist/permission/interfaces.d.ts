import { Permission } from "./enums";
export interface IPermission {
    _id: string;
    uniqueId: string;
    unitId: string;
    permissions: Permission[];
}
export interface IAddToPermissions {
    id?: string;
    uniqueId?: string;
    permissions: Permission[];
}
export interface IRemoveFromPermissions {
    id?: string;
    uniqueId?: string;
    permissions: Permission[];
}
export interface IChangeUnitId {
    id?: string;
    uniqueId?: string;
    unitId: string;
}
