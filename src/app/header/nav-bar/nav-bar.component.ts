import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from '../../../app/sharedClassesAndTypes/ICategory';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  cartTotal: number = 0;
  @Input() clientName: String = '';
  @Input() categories: ICategory[] = [];
  private subscription: Subscription = new Subscription();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.subscription = this.productService.getCount().subscribe((c) => {
    //   this.cartTotal = c.cartTotal;
    // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
