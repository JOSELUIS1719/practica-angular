import { Component, EventEmitter, Output } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Pokemons } from '../interfaces/interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginacionComponent {
  @Output() eventnewPokemon = new EventEmitter<Pokemons>();

  constructor(
    private _srvPokemon: ServicesService
  ){}

  get nextUrl():string | null{
    return this._srvPokemon.Next;
  }

  get previust():string | null{
    return this._srvPokemon.Previous;
  }

  loadPokemon(url: string | null): void {
    if (url) {
      this._srvPokemon.getPokemons(url).subscribe(poke => {
        poke.results.forEach( element => {
          this._srvPokemon.getPokemon(element.name).subscribe(poekmon =>{
            element.data = poekmon;
            this._srvPokemon.Next = poke.next;
            this._srvPokemon.Previous = poke.previous;
          })
        })
        this.eventnewPokemon.emit(poke);
      })
    }
  }
}
