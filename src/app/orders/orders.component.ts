import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  constructor(private _productsService: ProductsService){
    
  }

  ngOnInit(): void {
    this.getAllOrder()
  }
  
  getAllOrder(){
    this._productsService.getAllOrder().subscribe({
      next:(data)=>{
        console.log(data);
      }
    })
  }
}
