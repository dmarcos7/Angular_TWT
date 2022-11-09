import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //atributos
  title = 'Gestion de Pedidos';
  usuario: String = 'David';

  observable !: Observable<number>;

  onIniciarObservable(){
    this.observable = new Observable((observer)=>{

      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(()=>{
        observer.next(4);
        observer.complete();
      }, 1000);

    });
  }

  onSuscribirseAlObservable(){
    this.observable.subscribe(
      (n: number)=>{
        console.log('recojo' + n);
      },
      error => {
        console.log('se produjo un error', error);
      },
      () => {
        console.log('completado');
      }
    )
  }
}
