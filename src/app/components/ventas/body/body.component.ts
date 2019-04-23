import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { VentasService } from '../../../services/ventas.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  body: any = {};

  constructor( private http: HttpClient, private ventasService: VentasService ) {
  }

  ngOnInit() {
  }

  guardar() {
    // console.log( this.body );

    this.ventasService.postSale( this.body )
      .subscribe( data => {

      });
  }



}
