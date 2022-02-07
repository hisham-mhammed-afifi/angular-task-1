import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { DiscountOffers } from 'src/app/sharedClassesAndTypes/DiscountOffers';
import { IProduct } from 'src/app/sharedClassesAndTypes/IProduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: any = {};
  discount: DiscountOffers = DiscountOffers.fifteen;
  storeName: String = 'SAMSUNG';
  cartTotal: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.getsingleProduct();
    // this.subscription = this.productService.getCount().subscribe((c) => {
    //   this.cartTotal = c.cartTotal;
    // });
  }

  // getsingleProduct(): any {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));

  //   return this.productService
  //     .getProductById(id)
  //     .subscribe((p: any) => (this.product = p));
  // }

  // addToCart() {
  //   let c = {
  //     cartTotal: this.cartTotal + 1,
  //   };
  //   this.productService.setCount(c);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
