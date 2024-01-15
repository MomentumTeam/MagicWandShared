import mongoose from "mongoose"
export interface ICategory {
    id: mongoose.Schema.Types.ObjectId,
    imageKey: String,
    name: String,
}