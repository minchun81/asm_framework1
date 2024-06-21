import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientIndexComponent } from './client-index/client-index.component';
import { ClientProductComponent } from './client-product/client-product.component';
import { ContactComponent } from './contact/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ClientComponentComponent } from '../client-component/client-component.component';
import { ManageComponent } from './auth/manage/manage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: ClientComponentComponent,
    children: [
      { path: 'home', component: ClientIndexComponent },
      { path: 'client-product', component: ClientProductComponent},
      { path: 'client-product/:id', component: ProductDetailComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'login', component:  LoginComponent},
      { path: 'header', component:  HeaderComponent},
      { path: 'manage', component: ManageComponent},
      { path: 'pagenotfound', component: PagenotfoundComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
