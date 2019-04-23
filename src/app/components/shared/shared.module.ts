import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    // Los compoenentes en shared si se exportan, son los unicos q lo hacen.
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
