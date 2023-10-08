import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrdersComponent } from './orders/orders.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
import { UpdatePassComponent } from './update-pass/update-pass.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo :"home", pathMatch:"full"},
  {path:"home", canActivate:[authGuard]  ,component:HomeComponent , title: "Home"},
  {path:"about",  canActivate:[authGuard]  ,component:AboutComponent, title: "about"},
  {path:"brand", canActivate:[authGuard]  , component:BrandComponent, title: "brand"},
  {path:"categories", canActivate:[authGuard]  ,component:CategoriesComponent , title: "categories"},
  {path:"products", canActivate:[authGuard]  ,component:ProductsComponent , title: "products"},
  {path:"check-out/:cartId", canActivate:[authGuard]  ,component:CheckOutComponent , title:"Check Out"},
  {path:"productDetails/:id" , canActivate:[authGuard]  ,component:ProductDetailsComponent, title:"productDetails"},
  {path:"allorders" ,canActivate:[authGuard]  , component:OrdersComponent, title:"All Orders"},
  {path:"sign-in",  component:SignInComponent , title: "sign-in"},
  {path:"sign-up", component:SignUpComponent, title: "sign-up"},
  {path:"forget-password",  component:ForgetPasswordComponent, title:"Forget Password"},
  {path:"code-verify", component:CodeVerifyComponent, title:"Verify Code"},
  {path:"update-pass", component:UpdatePassComponent, title:"Update Password"},
  {path:"wish-list", canActivate:[authGuard]  ,component:WishListComponent, title:"Wish List"},
  
  { path: 'cart', canActivate:[authGuard]  , loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },



  {path: "**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
