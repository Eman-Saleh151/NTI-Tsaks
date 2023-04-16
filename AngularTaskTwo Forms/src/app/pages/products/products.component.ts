import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    products=[
      {
      'title': 'product title 1',
      "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis!"
    },
      {
      'title': 'product title 2',
      "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis!"
    },
      {
      'title': 'product title 3',
      "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis!"
    },
      {
      'title': 'product title 4',
      "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis!"
    }
  ]
}
