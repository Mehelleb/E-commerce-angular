import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProducts!:Product[];
  ngOnInit(): void {
    this.listProducts=[
      {id:"1", title:"T-Shirt 1", quantity:10, price:20, like:0},
      {id:"2", title:"T-Shirt 2", quantity:34, price:34, like:0},
      {id:"3", title:"T-Shirt 3", quantity:122, price:222, like:0},
      {id:"4", title:"T-Shirt 4", quantity:0, price:454, like:0},
    ];
  }
  incrementLike(p:Product){
    for(let i = 0; i<this.listProducts.length;i++){
      if(this.listProducts[i]===p){
        p.like++;
      }else{
        console.log("p est introuvable...")
      }
    }
  }
}
