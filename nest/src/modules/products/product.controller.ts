import { Controller, Get } from '@nestjs/common';
import { DataList, Product } from 'src/models';

@Controller()
export class ProductController {
    @Get('products')
    public list(): DataList<Product> {
        return {
            list: [],
            skip: 0,
            limit: 10,
            total: 0,
        };
    }
}
