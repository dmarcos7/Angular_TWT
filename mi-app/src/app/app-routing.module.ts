import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePedidoComponent } from './components/lista-pedidos/detalle-pedido/detalle-pedido.component';
import { EditarPedidoComponent } from './components/lista-pedidos/editar-pedido/editar-pedido.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  routes: Routes = [
    { path: 'detalle-pedido', component: DetallePedidoComponent },
    {path:'listaPedidos', component:ListaPedidosComponent},
    {path:'editarPedido', component: EditarPedidoComponent}
  ]
}
