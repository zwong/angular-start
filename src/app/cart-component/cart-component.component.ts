import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService 
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}