import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../app/sharedClassesAndTypes/IProduct';
import { DiscountOffers } from '../../app/sharedClassesAndTypes/DiscountOffers';
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  show: Boolean = true;
  product: any = {};
  discount: DiscountOffers = DiscountOffers.fifteen;
  storeName: String = 'SAMSUNG';

  products: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private location: Location
  ) {}

  // renderProduct(id: number): any {
  //   this.productId.next(id);
  // }

  ngOnInit(): void {
    this.renderValues();
    // this.productId.subscribe(
    //   (val) => console.log(val)
    //   // switchMap((productId: number) =>
    //   //   this.productService.getProductById(productId)
    //   // )
    // );
  }

  renderValues(): any {
    return this.productService
      .getAllProducts()
      .subscribe((p: any) => (this.products = p));
  }

  showProducts() {
    this.show = !this.show;
  }
  goBack(): void {
    this.location.back();
  }
}
