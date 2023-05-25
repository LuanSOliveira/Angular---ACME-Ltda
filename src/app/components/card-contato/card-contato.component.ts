import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-contato',
  templateUrl: './card-contato.component.html',
  styleUrls: ['./card-contato.component.scss']
})
export class CardContatoComponent {
  @Input() nome:string = ''
  @Input() cpf:string = ''
  @Input() telefone:string = ''
  @Input() logradouro:string = ''
  @Input() cep:string = ''

}
