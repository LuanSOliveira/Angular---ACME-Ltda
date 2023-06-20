import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPessoa } from 'src/app/interfaces/Interfaces';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pessoas: IPessoa[] = []
  filtro: string = ''
  filterPerson: IPessoa[] = []

  constructor(private router: Router, private menuService: MenuService){
    this.getPessoa()
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(!token){
      this.navigateToRouter('')
    }
  }

  navigateToRouter(route:string):void{
    this.router.navigate([route])
  }

  Sair():void{
    localStorage.removeItem('token')
    this.navigateToRouter('')
  }
  
  getPessoa():void{
    this.menuService.getAll().subscribe((pessoa) => {this.pessoas = pessoa, this.filterPerson = pessoa})
  }

  filterByPerson():void{
    let people = [...this.pessoas]
    this.filterPerson = people.filter(person => person.nome.toUpperCase().includes(this.filtro.toUpperCase()))
  }
}
