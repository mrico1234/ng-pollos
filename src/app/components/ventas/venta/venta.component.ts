import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentasService } from '../../../services/ventas.service';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  venta: any = {};

  constructor( private activateRoute: ActivatedRoute, private ventasService: VentasService ) {

    this.activateRoute.params.subscribe( params => {
      this.ventasService.getSales()
      .subscribe( (data: any) => {
        this.venta = data[params['id']];
      });
    });

   }

  ngOnInit() {
  }

  verPollo( idx: number ) {
    console.log(idx);
  }

}
