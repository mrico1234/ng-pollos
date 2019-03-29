import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent, LabelComponent, InputComponent, BodyComponent, FooterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    LabelComponent,
    InputComponent,
    BodyComponent,
    FooterComponent
  ]
})
export class MainModule { }
