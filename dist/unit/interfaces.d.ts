import { ObjectId } from "../general/types";
export interface IUnit {
    _id: ObjectId;
    name: string;
    kartoffelGroupIds: ObjectId[];
}
export interface IAddToKartoffelGroupId {
    id?: ObjectId;
    name?: string;
    kartoffelGroupId: ObjectId;
}
export interface IRemoveFromKartoffelGroupId {
    id?: ObjectId;
    name?: string;
    kartoffelGroupId: ObjectId;
}
