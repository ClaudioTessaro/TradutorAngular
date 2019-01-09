import { Component, OnInit, Input } from '@angular/core';


//Esse component, é instanciado dentro do template do componente painel, ou seja, ele é considerado um filho do componente painel.
@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public progresso: number; //para que essa variavel possa ser recebida como parametro, no momento da instancia do componente, utilizamos o decoretor input; Aqui eu estou recebendo do pai para o filho
  //Outra forma de passar o parametro do input, é colocar dentro, o valor do variavel que se encontra dentro do template HTML. Por exemplo, se no progresso component, estivesse [xyz] =="progresso", o input seria @Input('xyz'); 

  constructor() {
    this.progresso = 0;

   }

  ngOnInit() {
  }
  

}
