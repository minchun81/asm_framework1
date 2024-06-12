import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../admin/product.service';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})
export class ClientIndexComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getAllPosts().subscribe(data => {
      this.products = data['product'];
      console.log(data);
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

}

