import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// import 'rxjs/Rx';

@Injectable()
export class VentasService {

  url: string = 'https://surtipollos.herokuapp.com/sales';
  saleUrl: string = 'https://surtipollos.herokuapp.com/sales';



  constructor( private http: HttpClient ) {
    console.log('Servicio listo para usar');
  }

  getSales() {
    return this.http.get( this.url );
  }

  postSale( sale: any ): Observable<any> {
    let body  = JSON.stringify( sale );
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.url, body, { headers })
      .pipe(map( (res: any) => {
        console.log( res );
        return res ;
      }));
  }

  // putSale( sale: any, keys$: string ): Observable<any> {
  //   let body  = JSON.stringify( sale );
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   // const url = `${ this.putUrl }/${ keys$ }.json`;
  //   const url = `${ this.putUrl }/${ keys$ }.json`;

  //   return this.http.put( url, body, { headers } )
  //     .pipe(map( (res: any) => {
  //       console.log( res );
  //       return res ;
  //     }));
  // }

  borrarSale(id: string): Observable<any> {
    const url = `${this.saleUrl}/${id}`;
    return this.http.delete( url )
      .pipe(tap(res => res ));
  }

}
