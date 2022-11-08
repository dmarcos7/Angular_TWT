import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {
  pedido: Pedido;
  constructor() {
    this.pedido = {
      id: 0,
      usuario: 'David',
      descripcion: '',
      fechaPedido: new Date(),
      entregado: false
    };
  }

  ngOnInit(): void {
  }

  public onUpdateDescripcionPedido(event:any):void{
    //value porque se trata de un input, si fuera otra cosa no seria value
    this.pedido.descripcion = event.target.value;
  }

}
