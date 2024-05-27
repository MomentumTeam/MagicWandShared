import { RoleType, Rank } from './enums';
export interface IRole {
    _id: string;
    unitId?: string;
    name?: string;
    isStaffed?: boolean;
    type: RoleType;
    basicRoleId?: string;
    isActive?: boolean;
    ranks?: Rank[];
    uniqueIds?: string[];
}
export type INewRole = Omit<IRole, '_id'>;
export interface IUpdateRole {
    name?: string;
    isActive?: boolean;
    ranks?: Rank[];
    uniqueIds?: string[];
}
export interface IUpdateRoleWithId extends IUpdateRole {
    roleId: string;
}
