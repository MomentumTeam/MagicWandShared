import { ObjectId } from "../general/types";
import { RoleType, Rank } from "./enums";
export interface IRole {
    _id: ObjectId;
    unitId?: ObjectId;
    name?: string;
    isStaffed?: boolean;
    type: RoleType;
    basicRoleId?: ObjectId;
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
