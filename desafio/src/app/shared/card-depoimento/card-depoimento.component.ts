import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.css'
})
export class CardDepoimentoComponent {

  depoimento: string = `
  Recomendo fortemente minhas habilidades como desenvolvedor Junior.
`
autoria: string = 'Luis Galvão'
}
