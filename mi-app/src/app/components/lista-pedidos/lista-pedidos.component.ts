import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/model/pedido';
import { LogService } from 'src/app/servicios/log.service';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
  providers: [LogService]
})
export class ListaPedidosComponent implements OnInit {
  //una instancia de log service. Si instancias un atributo como private
  //se vuelve un atributo de la propia clase

  pedidos: Pedido[] = [];
  estadoListadoPedidos: String = 'noEntregado';
  modoNuevo: boolean = true;

  constructor(private log: LogService, private pedidosService: PedidoService, private router:Router) {
    this.pedidos = this.pedidosService.getAll();
  }

  ngOnInit(): void {
  }

  public onAltaPedido(): void {
    this.log.info('Yendo a la pagina del alta');
    this.router.navigate(['/pedido/alta'])
  }

  onTerminoEntrega(id: number) {
    console.log('me notifica que ha cambiado la movida');
    this.pedidos= this.pedidosService.getAll();
  }

}
