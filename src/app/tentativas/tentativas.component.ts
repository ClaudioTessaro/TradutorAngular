import { Coracao } from './../../shared/coracao.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
   
  @Input() public tentativas: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true/* como os parametros restante possui um default, nao preciso passar eles*/), new Coracao(true), new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes);
   

   }
   ngOnChanges(){ //Esse metodo faz parte do ciclo de vida da classe, e ele é disparado, nesse caso, todas as vezes em que o componente pai sofre uma modificaçãos
    if(this.tentativas !== this.coracoes.length){
      //console.log(this.coracoes[x])
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }


    console.log('tentativas recebedias do painel: ' +this.tentativas); 
   }

  ngOnInit() {
    
  }


}
