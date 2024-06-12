import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  urlUser = 'http://localhost:3000/api/user';

  constructor(private httpService: HttpClient) { }
  getAllUser(){
    return this.httpService.get(this.urlUser);
  }

  createUser(dataUser){
    return this.httpService.post(this.urlUser,dataUser);
  }
 // add user
 post(data: any): Observable<any> {
  return this.httpService.post(this.urlUser, data);
}
// delete user
deleteUser(id: string): Observable<any> {
  return this.httpService.delete(`${this.urlUser}/${id}`);
}
// update user
updateUser(id: string, data: any): Observable<any> {
  return this.httpService.put(`${this.urlUser}/${id}`, data);
}
//chỉnh sửa người dùng
getUserById(id: string): Observable<any> {
  return this.httpService.get(`${this.urlUser}/${id}`);
}

}
