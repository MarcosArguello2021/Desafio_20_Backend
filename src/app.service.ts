import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Se puede probar la API en la ruta: localhost:3000/api/productos con POSTMAN';
  }
}
