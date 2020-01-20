import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

   constructor() {}

   getAllProducts(){
      return [
         new Product("product1", "bran1", "een generieke product", 200),
         new Product("product2", "bran2", "een generieke product", 200)
      ]
   }

}
