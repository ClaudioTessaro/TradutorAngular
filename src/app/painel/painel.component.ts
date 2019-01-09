import { Frase } from './../../shared/frase.models';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import {Frases} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = Frases;
  public instrucao: string = "Traduza a frase";
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;
  
  @Output() public encerrarJogo= new EventEmitter(); //aqui eu estou expondo o atributo para os componentes pais

  constructor() { 
    this.atualizaRodada();
    
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;//o htmlinput serve para acessarmos um valor dentro do html.. Aqui estamos pegando o que está sendo inserindo no textarea.
  }

  public verificarResposta(): void {
    //Comparação entre as frases
    if (this.rodadaFrase.frasePrt == this.resposta ){
      //Caso a frase esteja correta, ela atualiza a frase da rodada  
        this.rodada += 1;
        this.atualizaRodada();
      
      //Progresso
      this.progresso = this.progresso + (100/(this.frases.length));  

    if (this.rodada === 4){
      this.encerrarJogo.emit('vitoria');
    }         
    }else{
      alert("Tradução errada");
      this.tentativas --;
      if(this.tentativas === 0){        
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";
  }

  public desabilitarVerificar(desabilitar: Event):void {
   
    console.log("Botao desabilitado");
  }
  //O two-way-binding é uma comunicação que ocorre entre o component e o template html, de 'maneira' simultanea entre ambos. ou seja, o que eu fizer no component vai afetar o html, e o que ue fizer no template html vai afetar o component;

  ngOnDestroy(){
    console.log("FOi destruido");
  }
}
 
