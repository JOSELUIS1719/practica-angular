import { Component, Input, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RickandmortyModalComponent } from '../modal/modal.component';
import { character } from '../interfaces/rikand'; // Cambié el nombre a mayúscula (mejor práctica para interfaces)

@Component({
  selector: 'app-rickandmorty-card',
  standalone: true,
  imports: [NgFor,  RickandmortyModalComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class RickandmortyCardComponent {
  @Input() characters: character[] = []; // Cambiado a array y nombre en plural
  
  @ViewChild(RickandmortyModalComponent) modal!: RickandmortyModalComponent;

  openModal(character: character) {
    if (character) {
      this.modal.open(character);
    }
  }
}