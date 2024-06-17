import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Router } from '@angular/router';

interface Category {
  idCategory?: string;
  nameCategory: string;
  image: string;
  status: string;
}

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = {
    nameCategory: '',
    image: '',
    status: 'active'
  };

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.categoryService.post(this.category).subscribe(response => {
      console.log('Category added:', response);
      // Redirect to category list or another page
      this.router.navigate(['/admin/list-category']);
    }, error => {
      console.error('Error adding category:', error);
    });
  }
}
