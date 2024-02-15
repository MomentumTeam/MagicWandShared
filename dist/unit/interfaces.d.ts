import mongoose from "mongoose";
export interface IUnit {
    _id: mongoose.Types.ObjectId;
    name: string;
    kartoffelGroupIds: mongoose.Types.ObjectId[];
}
export interface IAddToKartoffelGroupId {
    id?: mongoose.Types.ObjectId;
    name?: string;
    kartoffelGroupId: mongoose.Types.ObjectId;
}
export interface IRemoveFromKartoffelGroupId {
    id?: mongoose.Types.ObjectId;
    name?: string;
    kartoffelGroupId: mongoose.Types.ObjectId;
}
