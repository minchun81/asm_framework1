import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Kiểm tra thông tin tài khoản với localStorage
      const userInfoString = localStorage.getItem(username);
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        if (userInfo.password === password) {
          // Đăng nhập thành công, điều hướng đến trang chủ
          localStorage.setItem('loggedIn', 'true'); // Đánh dấu đã đăng nhập
          this.router.navigate(['/home']);
          return;
        }
      }

      // Đăng nhập thất bại
      alert('Username hoặc mật khẩu của bạn sai, vui lòng nhập lại.');
    } else {
      this.validateAllFormFields(this.loginForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
