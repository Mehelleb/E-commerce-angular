import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input () product!:Product;
  /**Je déclare un objet EventEmitter avec @Output() via une varible clickedProduct
   * pour dire que je vais envoyer des données dans cet emetteur.
    */
  @Output() clickedProduct=new EventEmitter<Product>();
  ngOnInit(): void {
  }
  /**Une fois cliqué sur LIKE, cette méthode envoie l'objet p au parent : list-product.component */
  sendNotif(p: Product){
    this.clickedProduct.emit(p);
  }
}
