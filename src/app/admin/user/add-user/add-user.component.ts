import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: any = {
    userName:'',
    password:'',
    email:'',
    name:'',
    role:'employee'
  }

  constructor(private userservice: UserService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(): void{
    this.userservice.addUser(this.user).subscribe(response => {
      console.log('Người dùng đã thêm:', response);
      // Redirect to category list or another page
      this.router.navigate(['/admin/list-user']);
    }, error => {
      console.error('Lỗi khi thêm sản phẩm:', error);
    });
  }

}
