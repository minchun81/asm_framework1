import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClientIndexComponent } from './client-index/client-index.component';
import { ClientProductComponent } from './client-product/client-product.component';
import { AdminModule } from '../admin/admin.module';
import { HeaderComponent } from './layouts/header/header.component';
import { ClientComponentComponent } from '../client-component/client-component.component';
import { ManageComponent } from './auth/manage/manage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ClientIndexComponent,
    ClientProductComponent,
    ClientComponentComponent,
    ContactComponent,
    HeaderComponent,
    ManageComponent,
    ProductDetailComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AdminModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
