import { Component, Input,  } from '@angular/core';
import { Character } from '../../core/types/type';
@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.css'
})
export class CardBuscaComponent {
  @Input () character!: Character;

  
}
