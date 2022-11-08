import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePedidoComponent } from './components/lista-pedidos/detalle-pedido/detalle-pedido.component';
import { EditarPedidoComponent } from './components/lista-pedidos/editar-pedido/editar-pedido.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';

const routes: Routes = [
 
  {path:'', component:ListaPedidosComponent},
  {path: 'pedido', component: DetallePedidoComponent},
  {path:'pedido/alta', component: EditarPedidoComponent},
  {path:'pedido/:id', component: DetallePedidoComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
