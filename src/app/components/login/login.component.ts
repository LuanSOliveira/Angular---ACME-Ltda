import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/mocks/ListaUser';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup
  validar: boolean = false

  constructor(private formBuilder: FormBuilder, private router: Router, private accessService: AccessService){
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      pass: ['',Validators.required]
    })
  }

  navigateToRoute(route: string):void{
    this.router.navigate([route])
  }

  Submeter(e: Event):void{
    e.preventDefault()

    if(this.loginForm.valid){
      users.map(
        (user) => {
          if(this.loginForm.get('login')?.value === user.name && this.loginForm.get('pass')?.value === user.pass){
            this.validar = true
            this.accessService.AtivaAccess()
            this.navigateToRoute('menu')
          }
        }
      )

      if(this.validar === false){
        alert('Usuário ou Senha inválidos.')
      }
    }
  }
}
