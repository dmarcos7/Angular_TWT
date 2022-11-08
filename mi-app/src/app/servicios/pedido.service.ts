import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  pedidos: Pedido[] = [];
  constructor() {
    this.pedidos = [
      {
        id: 1,
        usuario: 'David',
        descripcion: 'pizza',
        fechaPedido: new Date(),
        entregado: true
      },
      {
        id: 2,
        usuario: 'David',
        descripcion: 'Pasta',
        fechaPedido: new Date(),
        entregado: false
      },
      {
        id: 3,
        usuario: 'David',
        descripcion: 'Boligrafo',
        fechaPedido: new Date(),
        entregado: true
      }

    ]
   }

   public getAll():Pedido[] {
    return this.pedidos;
   }

   public add(p:Pedido){
      this.pedidos.push(p);
   }

   public cambiarEstadoPedido(id: number, entregado: boolean){
    this.pedidos.forEach((p) => {

      if(id === p.id){
        p.entregado = entregado;
      }
      
    });
   }
}
