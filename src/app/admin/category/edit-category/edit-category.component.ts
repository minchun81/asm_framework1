import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category: any = {
    idCategory: '',
    nameCategory: '',
    image: '',
    status: ''
  };

  submitted = false;
  @ViewChild('categoryForm') categoryForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCategory(id);
    }
  }

  getCategory(id: string): void {
    this.categoryService.getCategoryById(id).subscribe(data => {
      console.log('Data received from API:', data);
      if (data) {
        this.category = data;
        if (!this.category.idCategory) {
          this.category.idCategory = id;
        }
        console.log('Category assigned:', this.category);
      } else {
        console.error('API response does not contain category data');
      }
    }, error => {
      console.error('Error fetching category:', error);
    });
  }

  updateCategory(): void {
  this.submitted = true;
  console.log('Updating category:', this.category);
  if (this.categoryForm.valid && this.category.idCategory) {
    this.categoryService.updatePost(this.category.idCategory, this.category).subscribe(response => {
      console.log('Category updated:', response);
      this.router.navigate(['/admin/list-category']);
    }, error => {
      console.error('Error updating category:', error);
    });
  } else {
    console.error('Form is invalid or Category ID is undefined, cannot update category.');
  }
}
}
