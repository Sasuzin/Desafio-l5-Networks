import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../core/services/characters.service';
import { Character } from '../../../core/types/type';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrl: './personagens.component.css'
})
export class PersonagensComponent implements OnInit {

 
  characters!: Character[];
  constructor(private service: CharactersService) {

  }
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.characters = res;
      }
    )
  }
}
