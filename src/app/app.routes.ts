import { Routes, RouterModule } from '@angular/router';
import { SpaComponent } from './components/home/spa/spa.component';
import { BodyComponent } from './components/ventas/body/body.component';
import { VentasComponent } from './components/ventas/ventas/venta.component';
import { VentaComponent } from './components/ventas/venta/venta.component';



const ROUTES: Routes = [
  { path: 'home', component: SpaComponent },
  { path: 'vender', component: BodyComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'venta/:id', component: VentaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
