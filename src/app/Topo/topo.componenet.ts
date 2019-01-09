import { Component } from '@angular/core';

@Component({
    selector: 'app-topo',  //Indica qual o rotulo do componente;
    templateUrl: './topo.component.html', //ou podemos utilizar,
    styleUrls:['./topo.component.css']
    // //template: `<p>
    // Componente algo
    // <p>` //esse aqui é um template inline, ou seja oq for colocado aqui sera renderizado no componente raiz, esse template serve apenas para algo simples,
    // styles: ['.exemplo{color:red'] tem o mesmo sentido do template

})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês';


}