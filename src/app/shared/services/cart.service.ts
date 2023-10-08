import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  numOfCartItems : BehaviorSubject<number> = new BehaviorSubject(0)
  constructor(private _http:HttpClient) {
    this.getCart().subscribe({
      next:(res)=>{
       this.numOfCartItems.next(res.numOfCartItems)
      }
    })
  }

    addProductToCart(id:string) : Observable <any>{
      return this._http.post(`https://ecommerce.routemisr.com/api/v1/cart`,{ "productId": id},

      );
    }

    getCart() : Observable <any>{
      return this._http.get(`https://ecommerce.routemisr.com/api/v1/cart/`,

      );
    }


    updateCartCount(count:number,id:string) : Observable <any>{
      return this._http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
          count:`${count}`
      },

      );
    }


    removeProduct(id:string) : Observable <any>{
      return this._http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

      );
    }


    clearCart() : Observable <any>{
      return this._http.delete(`https://ecommerce.routemisr.com/api/v1/cart`,

      );
    }



    genrateOnlinePayment(cardId:string, shippingAddress:any) : Observable <any>{
      return this._http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=http://localhost:4200`,
      {shippingAddress:shippingAddress},

      );
    }


    addToWishList(data:string) : Observable<any> {
      return this._http.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:data} );
    }

    getToWishList() : Observable<any> {
      return this._http.get(`https://ecommerce.routemisr.com/api/v1/wishlist`);
    }

    removeWishList(Id:string) : Observable<any> {
      return this._http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${Id}`);
    }

    }
  

