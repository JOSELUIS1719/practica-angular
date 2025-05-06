import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class BuscarComponent {
  @Output('search') characterSearched = new EventEmitter<string>();
  buscarPersonaje(character: string): void {
      this.characterSearched.emit(character);  
  }
  
}
