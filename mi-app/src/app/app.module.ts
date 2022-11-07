import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { DetallePedidoComponent } from './components/lista-pedidos/detalle-pedido/detalle-pedido.component';
import { EditarPedidoComponent } from './components/lista-pedidos/editar-pedido/editar-pedido.component';
import localeES from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
@NgModule({
  declarations: [ //declaracion de los componentes
    AppComponent,
    CabeceraComponent,
    ListaPedidosComponent,
    DetallePedidoComponent,
    EditarPedidoComponent
  ],
  imports: [//declaracion de los mododulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localeES, "es");