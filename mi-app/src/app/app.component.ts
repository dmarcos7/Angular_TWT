import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //atributos
  title = 'Gestion de Pedidos';
  usuario: String = 'David';
}
