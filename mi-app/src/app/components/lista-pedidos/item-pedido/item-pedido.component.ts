import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { LogService } from 'src/app/servicios/log.service';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css']
})
export class ItemPedidoComponent implements OnInit {

  @Input() id: number = 1;
  @Input() descripcion: string = 'pedido1';
  usuario:string='David';
  fechaPedido:Date= new Date();
  @Input() entregado:boolean = false;

  @Output() entregaRealizada: EventEmitter<number> = new EventEmitter<number>();
  constructor(private logService: LogService, private  pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  onEntregarPedido(){
    this.logService.info('llamar a un servicio que diga que esta entregado');
    this.pedidoService.cambiarEstadoPedido(this.id, true);
    this.entregaRealizada.emit(this.id);
  }

}


