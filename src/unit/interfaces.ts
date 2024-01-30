import mongoose from "mongoose";

export interface IUnit {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  kartoffelGroupIds: mongoose.Schema.Types.ObjectId[];
}

export type INewUnit = Omit<IUnit, "_id">;

export interface IAddToKartoffelGroupId {
  id?: mongoose.Schema.Types.ObjectId;
  name?: string;
  kartoffelGroupId: mongoose.Schema.Types.ObjectId;
}

export interface IRemoveFromKartoffelGroupId {
  id?: mongoose.Schema.Types.ObjectId;
  name?: string;
  kartoffelGroupId: mongoose.Schema.Types.ObjectId;
}
