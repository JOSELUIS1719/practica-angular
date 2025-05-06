import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  @Output() neweventPo = new EventEmitter<string>();

  bucarPokemon(pokemon: string): void {
    this.neweventPo.emit(pokemon);
  }

}
