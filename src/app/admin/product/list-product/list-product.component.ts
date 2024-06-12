import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: any[] = [];
  
  constructor(private router: Router, private productService: ProductService) { }

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

  deleteProduct(id: string): void {
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
      this.productService.deletePost(id).subscribe(response => {
        console.log('Đã xóa product:', response);
        this.fetchProducts(); // Refresh the list after deletion
      }, error => {
        console.error('Lỗi không thể xóa products:', error);
      });
    }
  }

  navigateToEditProduct(productId: string): void {
    this.router.navigate(['/admin/edit-product', productId]);
  }
}
