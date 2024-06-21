import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../admin/product.service';
import { CategoryService } from '../../admin/category.service';

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.component.html',
  styleUrls: ['./client-product.component.css']
})
export class ClientProductComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchProducts(): void {
    this.productService.getAllPosts().subscribe(data => {
      this.products = data['product'];
      console.log(data);
    }, error => {
      console.error('Error fetching products:', error);
    });
  }
  fetchCategories(): void {
    this.categoryService.getAllPosts().subscribe(data => {
      this.categories = data['categories'];
      console.log(data);      
    }, error => {
      console.error('Error fetching categories:', error);
    });
  }

}
