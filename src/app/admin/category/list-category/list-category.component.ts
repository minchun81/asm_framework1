import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  [x: string]: any;
  categories: any[] = [];
  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }
  fetchCategories(): void {
    this.categoryService.getAllPosts().subscribe(data => {
      this.categories = data['categories'];
      console.log(data);
    }, error => {
      console.error('Error fetching categories:', error);
    });
  }
  
  deleteCategory(id: string): void {
    if(confirm("Bạn có chắc chắn muốn xóa?")) {
      this.categoryService.deletePost(id).subscribe(response => {
        console.log('Đã xóa category:', response);
        this.fetchCategories(); // Refresh the list after deletion
      }, error => {
        console.error('Lỗi không thể xóa category:', error);
      });
    }
  }

  navigateToEditCategory(categoryId: string): void {
    this.router.navigate(['/admin/edit-category', categoryId]);
  }
}
