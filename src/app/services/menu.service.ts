import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPessoa } from '../interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private urlApi:string = 'https://my-json-server.typicode.com/esley/demo/clientes'

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPessoa[]>{
    return this.http.get<IPessoa[]>(this.urlApi)
  }
}
