import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  error;
  users: User[] = [];
  adduser: User = { userName:'', password:'', email:'', name:'', role:''};

  constructor(private userService : UserService) { }

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
  onCreatePost(dataUser: User): void {
    if (this.adduser.id) {
      this.userService.updatePost(this.adduser.id, dataUser).subscribe(p => {
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
      this.userService.addUser(dataUser).subscribe(p => {
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

  onSubmit(): void {
    this.onCreatePost(this.adduser);
  }
  resetForm(): void{
    this.adduser = { userName:'', password:'', email:'', name:'', role:''};
  }
}
