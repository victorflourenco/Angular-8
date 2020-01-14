import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  nome: string;
  arrayNum = ['Hugo','Freitas','Paola',4,5];

  constructor() { }

  ngOnInit() {
    //this.nome = 'Hugo Vasconcelos';
  }

  recuperarTexto(nome:string){
      this.nome = nome;
  }

}
