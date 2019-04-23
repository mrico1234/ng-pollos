import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,
    VentasModule
  ],
  exports: [
    CommonModule,
    HomeModule,
    SharedModule,
    VentasModule
  ],
  providers: [],
})
export class ComponentModule {}
