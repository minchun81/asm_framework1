import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './client/index/index.component';
import { ClientComponentComponent } from './client/client-component/client-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: ClientComponentComponent,
    children: [
      { path: 'home', component: IndexComponent },
      // Add more child routes here if needed
    ]
  },  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule { }
