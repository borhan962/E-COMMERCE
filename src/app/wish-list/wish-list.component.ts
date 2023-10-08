import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Product } from '../product';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  allProduct:Product[] = []
  product:Product = {} as Product
   constructor(private _cartService:CartService){

   }

   ngOnInit(): void {
     this._cartService.getToWishList().subscribe({
      next:(data)=>{
        console.log(data.data)
        this.allProduct = data.data
      },
      error:(err)=>{
        console.error(err);
      }
     })
   }

   addToCart(id:string){
    this._cartService.addProductToCart(id).subscribe({
     next:(data)=>
     {
       this._cartService.numOfCartItems.next(data.numOfCartItems)
     },
     error :(err)=> console.log("Error", err)
    })
   }

   removeFromWishList(id:string){
    this._cartService.removeWishList(id).subscribe({
     next:(data)=>
     {
       console.log(data);
       this.allProduct = data.data
       
     },
     error :(err)=> console.log("Error", err)
    })
   }
}
