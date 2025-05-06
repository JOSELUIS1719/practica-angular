import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Pokemons } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _url:string = 'https://pokeapi.co/api/v2/pokemon'
  private next : string| null = null;
  private previous : string| null = null;
  constructor(
    private http: HttpClient
  ) { }

  getPokemons(url:string = this._url): Observable<Pokemons>{
    return this.http.get<Pokemons>(url)
  }

  getPokemon(name:string): Observable<Pokemon>{
    return this.http.get<Pokemon>(this._url + '/' + name)
  }

  set Next(url:string | null){
    this.next = url;
  }

  set Previous(url:string | null){
    this.previous = url;
  }

  get Next():string | null{
    return this.next;
  }
  get Previous(): string | null{
    return this.previous;
  }
}
