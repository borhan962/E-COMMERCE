import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from './interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartId: string = ''
   cartDetailes : Cart = {} as Cart
   constructor(private _cartService: CartService){

   }
  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this._cartService.getCart().subscribe({
      next:(data)=>{
        console.log(data)
        this.cartDetailes = data
        this.cartId = data.data._id
      },
    })
    
  }
  updateCount(count:number,id:string){
    this._cartService.updateCartCount(count,id).subscribe({
      next:(data)=>{
      console.log(data),
      this.cartDetailes = data
    }
  })

  }


  deleteItem(id:string){
   this._cartService.removeProduct(id).subscribe({
    next:(data)=>{
      console.log(data)
      this.cartDetailes = data
    }
   
})
  }


  clearCart(){
    this._cartService.clearCart().subscribe({
      next:(data)=> {
        console.log('data')
        this.cartDetailes = data
      }
    })
  }

}

