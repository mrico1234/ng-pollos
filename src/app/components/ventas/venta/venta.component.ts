import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentasService } from '../../../services/ventas.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  venta: any = {};
  id: string;

  constructor( private activateRoute: ActivatedRoute, private ventasService: VentasService, private router: Router ) {

    this.activateRoute.params.subscribe( params => {
      this.ventasService.getSales()
      .subscribe( (data: any) => {
        this.venta = data[params['id']];
        this.id = params['id'];
        console.log(this.id);
      });
    });

   }

  ngOnInit() {
  }

  verPollo( idx: number ) {
    console.log(idx);
  }

  delete() {
    console.log(this.id);
    this.ventasService.borrarSale(this.id)
      .subscribe(data => {
        console.log(data);
      });
  }

}
