import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosHttpService {
  private urlBase: string ="http://localhost:8080/ws";
  private httpOptions ={
   headers: new HttpHeaders ({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { 

  }

  //get all
  public getAll():Observable<Pedido[]>{
    const url = this.urlBase + "/pedidos";
    return this.http.get<Pedido[]>(url, this.httpOptions);
  }
  //get By id
  public getById(id:number):Observable<Pedido>{
    const url = this.urlBase + "/pedidos/"+id;
    return this.http.get<Pedido>(url, this.httpOptions);
  }
  //add
  public add(pedido:Pedido):Observable<Pedido>{
    const url = this.urlBase + "/pedidos/insertar";
    return this.http.post<Pedido>(url, pedido, this.httpOptions);
  }
  //delete
  public delete(id:number):Observable<never>{
    const url = this.urlBase + "/pedidos/borrar/"+id;
    return this.http.delete<never>(url);
  }
  //update
  public update(p:Pedido):Observable<Pedido>{
    const url = this.urlBase + "/pedidos/modificar/"+p.id;
    return this.http.put<Pedido>(url, p, this.httpOptions);
  }
}
