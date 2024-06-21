import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../admin/product.service';
import { CategoryService } from '../../admin/category.service';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})
export class ClientIndexComponent implements OnInit {
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

