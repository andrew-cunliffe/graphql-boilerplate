import { Injectable } from '@nestjs/common';
import { Product } from 'src/models';

@Injectable()
export class ProductService {
    public retrieve(): Product {
        return { name: 'test', price: 100 };
    }
}
