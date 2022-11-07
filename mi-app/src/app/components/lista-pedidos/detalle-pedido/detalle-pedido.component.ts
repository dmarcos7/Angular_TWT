import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
  pedido: Pedido;
  constructor() { 
    this.pedido = {
      id: 1,
      usuario:'David',
      descripcion: 'Raton',
      fechaPedido: new Date(),
      entregado: false
    }
  }

  ngOnInit(): void {
  }

}
