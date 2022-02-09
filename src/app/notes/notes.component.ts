import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { forbidden } from '../custom/name.validator';
import { IProduct } from '../sharedClassesAndTypes/IProduct';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  products: IProduct[] = [];
  hasDiscount: string = '';
  notesForm = this.fb.group({
    name: [
      '',
      [Validators.required, forbidden(/admin/), forbidden(/adminstrator/)],
    ],
    select: [''],
    check: [false],
    comments: this.fb.array([]),
  });
  constructor(
    private fb: FormBuilder,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productService.getAllProducts().subscribe((products) => {
      console.log(products);

      this.products = products;
    });
  }

  get name() {
    return this.notesForm.get('name');
  }
  get select() {
    return this.notesForm.get('select');
  }

  get comments(): FormArray {
    return this.notesForm.get('comments') as FormArray;
  }

  isInvalid(control: any) {
    return control && control.touched && control.invalid;
  }
  isValid(control: any) {
    return control && control.touched && control.valid;
  }

  addComment() {
    this.comments.push(this.fb.control(''));
  }

  resetCheck() {
    this.notesForm.get('check')?.setValue(false);
  }

  checkDiscount() {
    const product = this.products.filter((p: any) => {
      return p.name === this.select?.value;
    });
    this.notesForm.get('check')?.valueChanges.subscribe((changedValues) => {
      if (changedValues) {
        this.hasDiscount = product[0].disc;
      } else {
        this.hasDiscount = '';
      }
    });
  }

  // addNewCompany() {
  //   this.companiesFormArr.push(
  //     this.fb.group({
  //       company: [''],
  //       projects: this.fb.array([])
  //     })
  //   );
  // }
}
