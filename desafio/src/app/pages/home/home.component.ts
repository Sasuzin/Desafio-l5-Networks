import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../core/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor ( private servicoCharacters: CharactersService) {

  }
  ngOnInit(): void {
    this.servicoCharacters.listar().subscribe(
      resposta => {
        console.log(resposta)
      }
    )
  }

}
