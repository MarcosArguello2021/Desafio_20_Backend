import { Schema } from "mongoose";

export const ProductoSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    code: Number
}, {
    timestamps: true,
    versionKey: false
})