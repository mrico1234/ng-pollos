import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaComponent } from './spa/spa.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SpaComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    // SpaComponent
  ],
  providers: [],
})
export class HomeModule {}
