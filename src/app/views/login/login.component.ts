import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Cliente } from 'src/app/models/cliente';
import { Sessao } from 'src/app/services/Sessao';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente(this.http)
  }

  cliente:Cliente
  mensagem:string = ""

  fazerLogin(){
    if(this.cliente.login == ""){
      this.mensagem = "Preencha o login"
      setTimeout(()=>{
        this.mensagem = ""
      }, 1000)
      return
    }

    if(this.cliente.senha == ""){
      this.mensagem = "Preencha a senha"
      setTimeout(()=>{
        this.mensagem = ""
      }, 1000)
      return
    }

    this.cliente.fazerLogin((cliente: Cliente) => {
      if(!cliente){
        this.mensagem = "Login ou senha inválido"
        setTimeout(()=>{
          this.mensagem = ""
        }, 1000)
        return
      }

      Sessao.setCliente(cliente);
      this.router.navigateByUrl("/home")
    });
  }

}
