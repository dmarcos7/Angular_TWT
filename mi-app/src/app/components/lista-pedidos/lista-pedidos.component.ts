import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { LogService } from 'src/app/servicios/log.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  //una instancia de log service. Si instancias un atributo como private
  //se vuelve un atributo de la propia clase

  pedidos: Pedido[] = [];
  estadoListadoPedidos: String ='noEntregado';
  
  constructor(private log: LogService) {
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

  ngOnInit(): void {
  }

  public onAltaPedido(): void {
    this.log.info('Yendo a la pagina del alta');
  }

}
