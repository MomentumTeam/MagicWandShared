import { IPermission } from "./interfaces";
export type INewPermission = Omit<IPermission, "_id">;
