import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { VentasService } from '../../../services/ventas.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['../body/body.component.scss'],
})
export class VentasComponent {

  ventas: any[] = [];

  constructor( private http: HttpClient, private router: Router, private ventasService: VentasService ) {

    // Solicitud get
    this.ventasService.getSales()
      .subscribe(
        (data: any) => {
          this.ventas = data;
          console.log(this.ventas);
        },
        (error) => {
          console.log(error);
        }
      );

  } // Constructor

  verVenta( id: number ) {
    this.router.navigate( ['/venta', id] );
  }

}


/* this.http.get('http://localhost:3000/sales.json')
      .subscribe( ( resp: any ) => {
        this.ventas = resp;
        console.log( resp );
      }); */


// addType(name: string): Observable<IType> {
//   let body = JSON.stringify({ name });
//   let headers = new Headers({ 'Content-Type': 'application/json'});
  // let options = new RequestOptions({ headers: headers });

//   return this.http.post('http://localhost:3000/sales', body, options)
//     .map(this.handleResponse)
//   .catch(this.handleError);
// }
// 