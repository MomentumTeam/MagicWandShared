import mongoose from "mongoose";


export interface ISignature {
    _id: mongoose.ObjectId
    kartoffelEntityId: mongoose.ObjectId,
    image: string,
}