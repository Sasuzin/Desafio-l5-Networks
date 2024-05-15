import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../core/services/characters.service';
import { Character } from '../../core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  listCharacters: Character[] =[];
  constructor ( private servicoCharacter: CharactersService) {

  }
  ngOnInit(): void {
    this.servicoCharacter.listar().subscribe(({ results }) => {
      this.listCharacters = results;
    }

    )
  }

}
