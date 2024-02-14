import { ObjectId } from "../general/types";
import { Permission } from "./enums";

export interface IPermission {
  _id: ObjectId;
  uniqueId: string;
  unitId: ObjectId;
  permissions: Permission[];
}

export interface IAddToPermissions {
  id?: ObjectId;
  uniqueId?: string;
  permissions: Permission[];
}

export interface IRemoveFromPermissions {
  id?: ObjectId;
  uniqueId?: string;
  permissions: Permission[];
}

export interface IChangeUnitId {
  id?: ObjectId;
  uniqueId?: string;
  unitId: ObjectId;
}
