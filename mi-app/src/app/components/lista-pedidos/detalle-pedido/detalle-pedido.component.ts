import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pedido } from 'src/app/model/pedido';
import { LogService } from 'src/app/servicios/log.service';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
  pedido: Pedido;
  constructor(private router:ActivatedRoute, private pedidosService: PedidoService) { 
    this.pedido = {
      id: 1,
      usuario:'David',
      descripcion: 'Raton',
      fechaPedido: new Date(),
      entregado: false
    }
    var id = this.router.snapshot.params['id'];
    
    if(id != null){
      this.pedido = pedidosService.getById(id);
    }
    
    

    
  }

  ngOnInit(): void {
  }


}
