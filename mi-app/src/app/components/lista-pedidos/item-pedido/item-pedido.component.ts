import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { LogService } from 'src/app/servicios/log.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { PedidosHttpService } from 'src/app/servicios/pedidos-http.service';

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
  constructor(private logService: LogService, private pedidoService: PedidoService, private pedidoService2: PedidosHttpService) { }

  ngOnInit(): void {
  }

  onEntregarPedido(){
    this.logService.info('llamar a un servicio que diga que esta entregado');
    //this.pedidoService.cambiarEstadoPedido(this.id, true);
    let pMod = {id: this.id, descripcion:this.descripcion, usuario:'David', fechaPedido: new Date(), entregado:true};
    this.pedidoService2.update(pMod).subscribe((p:Pedido)=>{
      this.entregaRealizada.emit(this.id);
    });
   
  }

  onBorrarPedido():void{
    this.logService.info('llamar a un servicio que diga que esta entregado');
    this.pedidoService2.delete(this.id).subscribe(
      (res:string)=> {
        console.log('borrando',res);
        this.entregaRealizada.emit(this.id);
      },
      error => {
        console.log('error'+error.message)
      }
    );

  }

}


