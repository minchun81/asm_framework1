import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
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
  downloadURL: string;
  formErrors: any = {};

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.buildFormErrors();
  }

  onSubmit(): void {
    // Kiểm tra các trường dữ liệu
    this.validateForm();

    // Kiểm tra xem có lỗi hay không
    if (this.isFormValid()) {
      this.categoryService.post(this.category).subscribe(response => {
        console.log('Category added:', response);
        // Redirect to category list or another page
        this.router.navigate(['/admin/list-category']);
      }, error => {
        console.error('Error adding category:', error);
      });
    }
  }

  validateForm(): void {
    // Xóa các thông báo lỗi cũ
    this.buildFormErrors();

    // Kiểm tra từng trường dữ liệu và đặt thông báo lỗi tương ứng
    if (!this.category.image) {
      this.formErrors.image = 'Ảnh không được để trống !.';
    }

    if (!this.category.nameCategory) {
      this.formErrors.nameCategory = 'Tên danh mục không được để trống !';
    }

    if (!this.category.status) {
      this.formErrors.status = 'Trạng thái không được để trống';
    }
  }

  isFormValid(): boolean {
    // Kiểm tra xem có thông báo lỗi nào không
    return Object.values(this.formErrors).every(error => !error);
  }


  buildFormErrors(): void {
    this.formErrors = {
      image: '',
      nameCategory: '',
      status: ''
    };
  }
  //...........................
  uploadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files.length > 0) {
      const file = input.files[0];
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`uploads/${file.name}`);
      fileRef.put(file).then((snapshot: any) => {
        fileRef.getDownloadURL().then((url: string) => {
          this.downloadURL = url;
        });
      });
    }
  }

  // onSubmit(): void {
  //   this.categoryService.post(this.category).subscribe(response => {
  //     console.log('Category added:', response);
  //     // Redirect to category list or another page
  //     this.router.navigate(['/admin/list-category']);
  //   }, error => {
  //     console.error('Error adding category:', error);
  //   });
  // }

}
