import { Document } from "mongoose";

export interface Producto extends Document {
    readonly name: string
    readonly description: string
    readonly price: number
    readonly stock: Number
    readonly code: Number
} 
