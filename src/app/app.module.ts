import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './client/contact/contact/contact.component';
import { LoginComponent } from './client/auth/login/login.component';
import { RegisterComponent } from './client/auth/register/register.component';
import { ClientComponentComponent } from './client/client-component/client-component.component';
import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './client/layouts/header/header.component';
import { FooterComponent } from './client/layouts/footer/footer.component';
import { IndexComponent } from './client/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponentComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AdminModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
