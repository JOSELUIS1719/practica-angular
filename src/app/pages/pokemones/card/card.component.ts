import { Component, Input, ViewChild } from '@angular/core';
import { Pokemon, Pokemons } from '../interfaces/interface';
import { NgFor, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgFor, ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() pokemon: Pokemons | undefined;

  @ViewChild(ModalComponent) modal!: ModalComponent;

  openModal(poke:Pokemon){
    if(poke){
      this.modal.open(poke)
    }
  }
}
