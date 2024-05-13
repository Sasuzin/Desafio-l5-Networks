import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../types/type'
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  personagens = [];
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
   }


  listar () : Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.apiUrl}/character`)
  }
}
