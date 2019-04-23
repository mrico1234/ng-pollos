import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// ROUTES
import { APP_ROUTING } from './app.routes';

// SERVICES
import { VentasService } from './services/ventas.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { ComponentModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FlexLayoutModule,
    HttpClientModule,
    ComponentModule
  ],
  providers: [
    VentasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
