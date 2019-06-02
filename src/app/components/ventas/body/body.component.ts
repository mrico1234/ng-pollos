import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from '../../../services/ventas.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  body: any = {};
  nuevo = false;
  id: string;

  constructor(  private ventasService: VentasService, private route: ActivatedRoute, private router: Router ) {

    this.route.params.subscribe( params => this.id = params['id'] );

  }

  ngOnInit() {
  }

  guardar() {
    console.log( this.body );

    this.ventasService.postSale( this.body )
      .subscribe( data => {
        this.router.navigate(['/venta', data.id]);
      });
  }



}
