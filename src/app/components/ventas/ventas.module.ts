import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from './body/body.component';
import { VentasComponent } from './ventas/venta.component';
import { VentaComponent } from './venta/venta.component';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    BodyComponent,
    VentasComponent,
    VentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    // BodyComponent,
    // VentaComponent
  ],
  providers: [],
})
export class VentasModule {}