import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  logado: boolean = false

  constructor() { }

  AtivaAccess():void{
    this.logado = true
  }

  DesativaAccess():void{
    this.logado = false
  }
}
