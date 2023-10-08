import { Component, Input } from '@angular/core';
import { Product } from './../product';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
   constructor(private _cartService:CartService){}

  @Input() product:Product = {} as Product

  addToCart(id:string){
   this._cartService.addProductToCart(id).subscribe({
    next:(data)=>
    {
      this._cartService.numOfCartItems.next(data.numOfCartItems)
    },
    error :(err)=> console.log("Error", err)
   })
  }


  addToWishList(id:string){
    this._cartService.addToWishList(id).subscribe({
     next:(res)=>
     {
       console.log(res);
       
     },
     error :(err)=> console.log("Error", err)
    })
   }

}
