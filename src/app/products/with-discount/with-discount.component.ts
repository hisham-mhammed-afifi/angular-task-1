import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/sharedClassesAndTypes/IProduct';

@Component({
  selector: 'app-with-discount',
  templateUrl: './with-discount.component.html',
  styleUrls: ['./with-discount.component.scss'],
})
export class WithDiscountComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.showWithDiscount();
  }

  showWithDiscount() {
    this.productService.selectwithDisc().subscribe((products) => {
      console.log(products);

      this.products = products;
    });
  }
}
