import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProduct } from '../sharedClassesAndTypes/IProduct';

interface OrderCount {
  cartTotal: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
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
    {
      id: 4,
      name: 'samsung note10',
      quantity: 10,
      price: 10000,
      image: 'assets/images/image-one.jpg',
    },
  ];

  constructor() {}
  private orderCountObserver = new BehaviorSubject<OrderCount>({
    cartTotal: 0,
  });
  private orderCountObservable = this.orderCountObserver.asObservable();

  getCount(): Observable<OrderCount> {
    return this.orderCountObservable;
  }

  setCount(Val: OrderCount) {
    return this.orderCountObserver.next(Val);
  }

  getAllProducts(): Observable<any> {
    return of(this.products).pipe();
  }

  getProductById(id: number): Observable<any> {
    // if (isNaN(id)) return console.error(`${id} is not a number`);

    const product = this.products.find((p: any) => p.id === id);
    // if (!product) return console.error(`There is no product with id: ${id}`);

    return of(product).pipe();
  }
}
