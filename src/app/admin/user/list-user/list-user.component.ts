import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  error;
  users: User[] = [];
  adduser: User = { userName:'', password:'', email:'', name:'', role:''};

  constructor(private userService : UserService, private router:Router) { }

  ngOnInit():void {
    this.fetchAllUsers();
  }
  //hiển thị danh sách người dùng
  fetchAllUsers(){
    this.userService.getAllUser().subscribe(data =>{
      this.users = data["user"];
      console.log(data);
    },
    error => {
      if(error.status == '404'){
        this.error = "Loi khong tim thay";
      }
      else{
        console.log(error);
        this.error = "Loi server " + error.message;
      }
    }
    );
  }
  //thêm người dùng mới
  onCreateUser(dataUser: User): void {
    if (this.adduser.id) {
      this.userService.updateUser(this.adduser.id, dataUser).subscribe(p => {
        console.log('Bài viết đã được cập nhật:', p);
        this.fetchAllUsers();
        this.resetForm();
        this.error = null;
      },
      error => {
        this.error = 'Lỗi cập nhật bài viết';
      console.error('Lỗi cập nhật bài viết:', error);
      });
    } else {
      this.userService.post(dataUser).subscribe(p => {
        console.log(p);
        this.fetchAllUsers();
        this.resetForm();
        this.error = null;
      },
      error => {
        this.error = 'Lỗi tạo bài viết';
      console.error('Lỗitạo bài viết:', error);
      });
    }
  }

  deleteUser(id: string): void {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.fetchAllUsers();
        this.error = null;
      }, error => {
        this.error = 'Lỗi ';
      console.error('Lỗi:', error);
      });
    }
  }

  editUser(id: string): void {
    this.router.navigate(['/admin/edit-user', id]);
  }

  onSubmit(): void {
    this.onCreateUser(this.adduser);
  }
  resetForm(): void{
    this.adduser = { userName:'', password:'', email:'', name:'', role:''};
  }
}
