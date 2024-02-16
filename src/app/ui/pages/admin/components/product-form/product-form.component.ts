import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'orix-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  createProductForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.createProductForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
      image: ['', [Validators.required]],
    });
  };

  onSubmit() {
    if(this.createProductForm.valid) {
      this.productService.createProduct(this.createProductForm.value)
      .subscribe(() => {
        alert('Product successfully created');
        this.createProductForm.reset();
      })
    } else {
      this.createProductForm.markAllAsTouched();
    }
  }
}
