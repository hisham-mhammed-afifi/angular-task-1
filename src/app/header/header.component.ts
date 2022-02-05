import { Component, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../../app/sharedClassesAndTypes/ICategory';
import { Subject, Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartTotal: number = 0;
  // sub = new Subject();
  @Input() clientName: String = '';
  @Input() categoryList: ICategory[] = [];
  @Output() name: String = '';
  @Output() categories: ICategory[] = [];
  private subscription: Subscription = new Subscription();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService.getCount().subscribe((c) => {
      this.cartTotal = c.cartTotal;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
