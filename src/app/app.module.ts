import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderWrapperComponent } from './slider-wrapper/slider-wrapper.component';
import { TremPipe } from './trem.pipe';
import { SearchPipe } from './search.pipe';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
import { UpdatePassComponent } from './update-pass/update-pass.component';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    ProductsComponent,
    SignInComponent,
    SignUpComponent,
    ErrorComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    SliderWrapperComponent,
    TremPipe,
    SearchPipe,
    CheckOutComponent,
    OrdersComponent,
    LoaderComponent,
    ForgetPasswordComponent,
    CodeVerifyComponent,
    UpdatePassComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
