import mongoose from "mongoose"
export interface ICategory {
    _id: mongoose.Schema.Types.ObjectId,
    imageKey: String,
    name: String,
}