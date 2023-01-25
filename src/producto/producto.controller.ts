import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common'
import { CrearProductoDTO } from "../dto/producto.dto"
import { ProductoService } from "./producto.service";

@Controller('api/productos')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

    @Get('/')
    async getProduct(@Res() res) {
        const productos = await this.productoService.getProducts()
        return res.status(HttpStatus.OK).json({ productos })
    }

    @Get('/:id')
    async getProductById(@Res() res, @Param('id') id) {
        const producto = await this.productoService.getProductById(id)
        if(!producto) throw new NotFoundException("No existe ese producto");
        return res.status(HttpStatus.OK).json({ producto })
    }

    @Post('/')
    async createPost(@Res() res, @Body() createProductDTO: CrearProductoDTO) {
        const producto = await this.productoService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({ mensagge: 'guardado exitoso', producto })
    }

    @Put('/:id') 
    async updateProduct(@Res() res, @Param('id') id, @Body() createProductDTO: CrearProductoDTO) {
        const producto = await this.productoService.updateProduct(id, createProductDTO)
        if(!producto) throw new NotFoundException("No existe ese producto");
        return res.status(HttpStatus.OK).json({ mensagge: 'actualizado', producto })
    }

    @Delete('/:id')
    async deleteProduct(@Res() res, @Param('id') id) {
        const producto = await this.productoService.deleteProduct(id)
        if(!producto) throw new NotFoundException("No existe ese producto");
        return res.status(HttpStatus.OK).json({ mensagge: 'borrado exitoso', producto })
    }
}
