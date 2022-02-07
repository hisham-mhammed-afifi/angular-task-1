import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/sharedClassesAndTypes/IProduct';

@Component({
  selector: 'app-without-discount',
  templateUrl: './without-discount.component.html',
  styleUrls: ['./without-discount.component.scss'],
})
export class WithoutDiscountComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.showWithoutDiscount();
  }

  showWithoutDiscount() {
    this.productService.selectwithoutDisc().subscribe((products) => {
      console.log(products);

      this.products = products;
    });
  }
}
