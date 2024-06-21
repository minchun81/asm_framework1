import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../admin/product.service';
import { CategoryService } from '../../admin/category.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  categories: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.fetchCategories();
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId !== null) {
        this.productService.getProductById(productId).subscribe(data => {
          console.log('Product data:', data); // Kiểm tra dữ liệu trả về từ API
          if (data && data.length > 0) {
            this.product = data[0]; // Lấy sản phẩm đầu tiên trong mảng
          } else {
            console.error('No product data found');
          }
        }, error => {
          console.error('Error fetching product:', error);
        });
      } else {
        console.error('Invalid product ID:', productId);
      }
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
