import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { IProduct } from '../sharedClassesAndTypes/IProduct';

// interface OrderCount {
//   cartTotal: number;
// }

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  selectwithDisc() {
    return this.getAllProducts().pipe(
      map((products) =>
        products.filter((product) => product.disc != 'No Discount')
      ),
      catchError((err) => {
        console.error(err.message);

        throw Error('ay haga');
      })
    );
  }

  selectwithoutDisc() {
    return this.getAllProducts().pipe(
      map((products) =>
        products.filter((product) => product.disc == 'No Discount')
      ),
      catchError((err) => {
        console.error(err.message);
        throw Error('ay haga');
      })
    );
  }

  // getCount(): Observable<OrderCount> {
  //   return this.orderCountObservable;
  // }

  // setCount(Val: OrderCount) {
  //   return this.orderCountObserver.next(Val);
  // }

  getAllProducts(): Observable<IProduct[]> {
    const products = this._http
      .get<IProduct[]>('../../assets/db/products.json')
      .pipe(
        catchError((err: any) => {
          console.error(err.message);

          throw Error('Errrrrrrrrrrrrror');
        })
      );
    return products;
  }

  // getSingleProduct(id: number): Observable<IProduct[]> {
  //   const products = this._http
  //     .get<IProduct[]>('../../assets/db/products.json')
  //     .pipe(
  //       catchError((err) => {
  //         throw Error('عنك ايرور -- لو سمحت شوف ال URL');
  //       })
  //     );
  //     const product = products.filter((p: any)=>{
  //       return p.id === id
  //     })
  //   return product;
  // }
}
