import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../admin/product.service';

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.component.html',
  styleUrls: ['./client-product.component.css']
})
export class ClientProductComponent implements OnInit {
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
