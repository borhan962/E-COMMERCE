import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allProduct:Product[] = []
  constructor(private _productsService:ProductsService){

  }

  ngOnInit(): void {
    this.getAllProduct()
  }

  getAllProduct(){
   this._productsService.getProducts().subscribe({
     next:(data)=>{
       console.log(data);
       this.allProduct = data.data
     },
   })
  }
  @Input() product:Product = {} as Product
}
