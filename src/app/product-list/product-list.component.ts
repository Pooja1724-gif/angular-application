import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data:any) => {
        this.products = data.slice(0, 50)
      });
  }
}
//https://dummyjson.com/products?_limit
// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';


// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.scss']
// })
// export class ProductListComponent implements OnInit {
//   products: any;

//   constructor(private productService: ProductService) { }

//   ngOnInit() {
//     this.productService.getProducts().subscribe(
//       (data: any[]) => {
//         this.products = data.slice(0, 50); 
//       },
//       error => {
//         console.log('An error occurred:', error);
//       }
//     );
//   }
// }
