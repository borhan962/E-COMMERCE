import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20 ,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 8
      },
    },
    nav: true
  }

    allCategory:Category[] = []
    constructor(private _productsService:ProductsService){

    }
    ngOnInit(): void {
      
     this.getCategory()
      
    }
    getCategory(){
      this._productsService.getCategory().subscribe({
        next:(data)=>{
          console.log(data)
          this.allCategory = data.data
        }
      })
    }
}
