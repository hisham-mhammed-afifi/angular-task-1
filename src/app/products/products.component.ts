import { Component, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../app/sharedClassesAndTypes/IProduct';
import { DiscountOffers } from '../../app/sharedClassesAndTypes/DiscountOffers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() discount: DiscountOffers = DiscountOffers.ten;
  @Input() productList: IProduct[] = [];
  @Input() isPurshased: Boolean = false;
  @Output() products: IProduct[] = [];
  constructor() {}

  ngOnInit(): void {}
}
