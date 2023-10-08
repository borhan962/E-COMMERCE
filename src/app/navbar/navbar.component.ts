import { Component } from '@angular/core';
import { AuthService } from 'src/core/Services/auth.service';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isLogin:boolean = false;
numOfCartItems:number = 0
constructor(private _authServices:AuthService,private _cartService:CartService){
this._authServices.userData.subscribe((res)=>{
  if (this._authServices.userData.getValue()){
    this.isLogin=true ;
  } 
   else{
    this.isLogin=false ;
   }
})
 this._cartService.numOfCartItems.subscribe(res =>{
  console.log(this.numOfCartItems = res);
  
 })
} 
 logOut(){
  this._authServices.logOut()
  }
}
