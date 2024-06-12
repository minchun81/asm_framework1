import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productservice: ProductService, private router: Router) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      imageProduct: [''],
      nameProduct: [''],
      price: [''],
      description:[''],
      sortDescription:[''],
      status: ['active']
    });
  }

  addProduct(): void {
    const productData = this.productForm.value;
    this.productservice.post(productData).subscribe(
      response => {
        console.log('Product added:', response);
        this.router.navigate(['/admin/list-product']);
      },
      error => {
        console.error('Error adding product:', error);
      }
    );
  }

}
