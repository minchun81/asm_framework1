import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  manageForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router) {
    this.manageForm = this.fb.group({
      username: ['admin', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]*$')]],
      password: ['1231213', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.manageForm.valid) {
      const username = this.manageForm.value.username;
      const password = this.manageForm.value.password;

      // Kiểm tra thông tin tài khoản
      if (username === 'admin' && password === '123123') {
        // Nếu thông tin trùng khớp sẽ chuyển trang
        this.router.navigate(['/admin']);
      } else {
        // Nếu không, hiển thị thông báo lỗi
        this.errorMessage = 'Username hoặc password của bạn sai.';
      }
    } else {
      // Nếu form không hợp lệ, hiển thị thông báo lỗi
      this.errorMessage = 'Vui lòng nhập đúng username và password.';
    }
  }
}
