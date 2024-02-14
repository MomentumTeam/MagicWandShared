import { ObjectId } from "../general/types";


export interface ISignature {
    _id: ObjectId
    kartoffelEntityId: ObjectId,
    image: string,
}