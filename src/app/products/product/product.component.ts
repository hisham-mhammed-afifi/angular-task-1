import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../../../app/sharedClassesAndTypes/DiscountOffers';
import { IProduct } from '../../../app/sharedClassesAndTypes/IProduct';
import { ICategory } from '../../../app/sharedClassesAndTypes/ICategory';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  discount: DiscountOffers;
  storeName: String;
  storeLogo: String;
  productList: IProduct[];
  categoryList: ICategory[];
  clientName: String;
  isPurshased: Boolean;
  constructor() {
    this.discount = DiscountOffers.ten;
    this.storeName = 'Samsung';
    this.storeLogo = 'SAMSUNG';
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
        name: 'samsung note10',
        quantity: 10,
        price: 10000,
        image: 'assets/images/image-two.jpg',
      },
      {
        id: 3,
        name: 'samsung note10',
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
    this.clientName = 'Hisham mohammed';
    this.isPurshased = true;
  }

  ngOnInit(): void {}
}

// (1)	Property “Discount” of type DiscountOffers Enum.
// (2)	Property “Store name” of type string.
// (3)	Property “Store Logo” of type string.
// (4)	Property “ProductList” which is an array of IProduct.
// (5)	Property “CategoryList” which an array of type ICategory.
// (6)	Property “ClientName” of type String.
// (7)	Property “IsPurshased” of type Boolean.
