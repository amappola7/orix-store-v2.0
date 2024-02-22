import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductM } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'orix-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  createEditProductForm!: FormGroup;
  categoriesList!: string[];

  @Input() mode!: string;
  @Output() submitForm: EventEmitter<ProductM> = new EventEmitter<ProductM>();

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.createEditProductForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
      image: ['', [Validators.required]],
    });

    this.productService.getCategories()
    .subscribe((result) => {
      this.categoriesList = result;
    })
  };

  // onSubmit() {
    // if(this.createEditProductForm.valid) {
    //   this.productService.createProduct(this.createEditProductForm.value)
    //   .subscribe(() => {
    //     alert('Product successfully created');
    //     this.createEditProductForm.reset();
    //   })
    // } else {
    //   this.createEditProductForm.markAllAsTouched();
    // }
  // }

  onSubmit(): void {
    if(this.createEditProductForm.valid) {
      this.submitForm.emit(this.createEditProductForm.value);
      this.createEditProductForm.reset();
    } else {
      this.createEditProductForm.markAllAsTouched();
    }
  }
}
