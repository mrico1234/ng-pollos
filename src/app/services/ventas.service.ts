import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// import 'rxjs/Rx';

@Injectable()
export class VentasService {

  //url: string = 'http://localhost:3000/sales';
  url: string = 'https://surtipollos.herokuapp.com/sales';


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

}

















// this.http.get('http://localhost:3000/sales.json')
//     .subscribe( ( resp: any[] ) => {
//       return this.vent = resp;
//       console.log( resp );
//     });