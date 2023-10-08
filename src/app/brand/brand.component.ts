import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Brands } from '../brands';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  allBrands:Brands[] = []
  constructor(private _productsService:ProductsService){

  }
  ngOnInit(): void {
    this.getBrands()
}

    getBrands(){
      this._productsService.getBrands().subscribe({
        next:(data)=>{
          console.log(data.data)
          this.allBrands = data.data
        }
      })
    }
  }