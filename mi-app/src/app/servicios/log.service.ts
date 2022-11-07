import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { 
    console.log('Instanciando log service');
  }

  public info(mensaje: String) :void {
    console.log(mensaje);
  }
}
