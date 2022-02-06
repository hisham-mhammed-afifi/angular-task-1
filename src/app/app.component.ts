import { Component, Output } from '@angular/core';
import { DiscountOffers } from '../app/sharedClassesAndTypes/DiscountOffers';
import { IProduct } from '../app/sharedClassesAndTypes/IProduct';
import { ICategory } from '../app/sharedClassesAndTypes/ICategory';
import { Location } from '@angular/common';

@Component({
  selector: 'myFirstApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Output() discount: DiscountOffers;
  @Output() storeName: String;
  @Output() storeLogo: String;
  @Output() productList: IProduct[];
  @Output() categoryList: ICategory[];
  @Output() clientName: String = '';
  @Output() isPurshased: Boolean;

  constructor() {
    this.discount = DiscountOffers.ten;
    this.storeName = 'Mobile Store';
    this.storeLogo = 'MOBO';
    this.productList = [
      {
        id: 1,
        name: 'samsung note10',
        quantity: 10,
        price: 10000,
        image: 'assets/images/image-one.jpg',
      },
      {
        id: 2,
        name: 'OPPO F9',
        quantity: 10,
        price: 10000,
        image: 'assets/images/image-two.jpg',
      },
      {
        id: 3,
        name: 'iPhone 13',
        quantity: 10,
        price: 10000,
        image: 'assets/images/image-three.jpg',
      },
    ];
    this.categoryList = [
      {
        id: 1,
        name: 'phones',
      },
      {
        id: 2,
        name: 'clothes',
      },
      {
        id: 3,
        name: 'technologies',
      },
    ];
    this.isPurshased = false;
  }
  buy() {
    this.isPurshased = true;
    console.log('added');
  }

  //   subject.subscribe(console.log);
  // subject.subscribe(console.log);

  // subject.next(456);

  // subject.subscribe(console.log);

  // subject.next(789);
}
