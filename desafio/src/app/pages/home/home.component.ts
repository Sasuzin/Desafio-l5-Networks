import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../core/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor ( private servicoCharacter: CharactersService) {

  }
  ngOnInit(): void {
    this.servicoCharacter.listar().subscribe(
      resposta => {
        console.log(resposta)
      }
    )
  }

}
