import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Producto } from "../interfaces/producto/producto.interface";
import { CrearProductoDTO } from "../dto/producto.dto";

@Injectable()
export class ProductoService {
    constructor(@InjectModel('Producto') private readonly productModel: Model<Producto>) { }

    async getProducts(): Promise<Producto[]> {
        const productos = await this.productModel.find()
        return productos
    }

    async getProductById(id: string): Promise<Producto> {
        const producto = await this.productModel.findById(id)
        return producto
    }

    async createProduct(createProductDTO: CrearProductoDTO): Promise<Producto> {
        const producto = await new this.productModel(createProductDTO)
        return await producto.save()
    }

    async updateProduct(id: string, createProductDTO: CrearProductoDTO) {
        const updateProducto = await this.productModel.findByIdAndUpdate(id, createProductDTO, { new: true })
        return updateProducto
    }

    async deleteProduct(id: string): Promise<Producto> {
        const deleteProducto = await this.productModel.findByIdAndDelete(id)
        return deleteProducto
    }
}
