import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  
  url = 'http://localhost:3000/api/category';
  updateCategory(idCategory: any, category: any): Observable<any> {
    const url = `${this.url}/${idCategory}`;
    return this.http.put(url, category);
  }
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(this.url);
  }

  getCategoryById(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  post(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  updatePost(id: string, data: any): Observable<any> {
    console.log('Sending PUT request to:', `${this.url}/${id}`, 'with data:', data);
    return this.http.put(`${this.url}/${id}`, data);
  }

}
