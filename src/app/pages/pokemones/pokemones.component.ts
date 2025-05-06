import { Component, OnInit } from '@angular/core';
import { Pokemons } from './interfaces/interface';
import { ServicesService } from './services/services.service';
import { CardComponent } from "./card/card.component";
import { PaginacionComponent } from "./paginacion/paginacion.component";
import { BuscarComponent } from "./buscar/buscar.component";

@Component({
  selector: 'app-pokemones',
  standalone: true,
  imports: [CardComponent, PaginacionComponent, BuscarComponent],
  templateUrl: './pokemones.component.html',
  styleUrl: './pokemones.component.css'
})
export class PokemonesComponent implements OnInit {

  pokemonesALL:Pokemons| undefined;

  constructor(
    private _srvPokemon: ServicesService
  ) { }

  ngOnInit(): void {
      this._srvPokemon.getPokemons().subscribe(poke => {
        poke.results.forEach( element => {
          this._srvPokemon.getPokemon(element.name).subscribe(poekmon =>{
            element.data = poekmon;
            this._srvPokemon.Next = poke.next;
            this._srvPokemon.Previous = poke.previous;
          })
        })

        this.pokemonesALL = poke;
      })
  }

  setPokemones(pokemon:Pokemons):void{
    this.pokemonesALL =  pokemon;
  }


  buscarPokemon(pokemon: string): void{
    if(pokemon){
      this._srvPokemon.getPokemon(pokemon).subscribe(poke => {
        this.pokemonesALL = {
          count: 1,
          next: null,
          previous: null,
          results: [{
            name: poke.name,
            url: '',
            data: poke
          }]
        }
      })
    }else{
      this.ngOnInit();
    }
    this._srvPokemon.Next = null;
    this._srvPokemon.Previous = null;
  }
}
