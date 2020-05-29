import { Component, OnInit } from '@angular/core';
import { Sessao } from 'src/app/services/Sessao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(!Sessao.getCliente()){
      this.router.navigateByUrl("/")
      return
    }
  }

}
