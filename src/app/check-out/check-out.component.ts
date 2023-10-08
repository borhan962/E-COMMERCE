import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {


  shippingAddress:FormGroup  = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })
   cartId:string = ''
  constructor(private _cartService:CartService ,private _activatedRoute:ActivatedRoute){


    this._activatedRoute.paramMap.subscribe((res:any)=>{
     this.cartId = res.params.cartId
    })
  }

  handleOnline(){
    this._cartService.genrateOnlinePayment(this.cartId,this.shippingAddress.value).subscribe({
      next:(data)=>{
        console.log(data.session.url)
        if(data.status == "success"){
          window.location.href = data.session.url
        }
      },
     })
  }
}
