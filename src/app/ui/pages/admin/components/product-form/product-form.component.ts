import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductM } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'orix-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss', './product-form-desktop.component.scss']
})
export class ProductFormComponent implements OnInit {
  createEditProductForm!: FormGroup;
  categoriesList!: string[];
  screenMode$!: Observable<boolean>;
screenMode!: boolean;

  @Input() mode!: string;
  @Output() submitForm: EventEmitter<ProductM> = new EventEmitter<ProductM>();

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private store: Store<{screenMode: boolean}>
  ) { }

  ngOnInit() {
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => this.screenMode = mode);
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

    if (this.mode === 'Edit') this.fillForm(this.productService.productToEdit);
  };

  onSubmit(): void {
    if (this.createEditProductForm.valid || this.mode === 'Create') {
      this.submitForm.emit(this.createEditProductForm.value);
      this.createEditProductForm.reset();
    } else if (this.mode === 'Edit') {
      this.submitForm.emit(this.createEditProductForm.value);
      this.createEditProductForm.reset();
    } else {
      this.createEditProductForm.markAllAsTouched();
    }
  }

  fillForm(productToEdit: ProductM): void {
    this.createEditProductForm.patchValue({
      name: productToEdit.name,
      price: productToEdit.price,
      description: productToEdit.description,
      category: productToEdit.category,
      image: productToEdit.image,
    });
  }
}
