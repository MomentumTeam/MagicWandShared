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