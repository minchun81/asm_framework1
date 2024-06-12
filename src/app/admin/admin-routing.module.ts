import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { IndexComponent } from './index/index.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
const routes: Routes = [
  {
    path: 'admin',component: AdminComponentComponent,
    children: [
      { path: '', component: IndexComponent }, // Route mặc định cho admin
      // category
      { path: 'list-category', component: ListCategoryComponent },
      { path: 'edit-category/:id', component: EditCategoryComponent },
      { path: 'add-category', component: AddCategoryComponent },
      // product
      { path: 'list-product', component: ListProductComponent },
      { path: 'edit-product', component: EditProductComponent },
      { path: 'add-product', component: AddProductComponent },
      // admin
      { path: 'list-user', component: ListUserComponent },
      { path: 'edit-user', component: EditUserComponent },
      { path: 'add-user', component: AddUserComponent },
    ]
  },
  { path: '**', redirectTo: 'admin' } // Route wildcard để chuyển hướng về admin
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
