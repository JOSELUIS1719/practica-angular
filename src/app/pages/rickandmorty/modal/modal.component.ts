import { Component } from '@angular/core';
import { character } from '../interfaces/rikand';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rickandmorty-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class RickandmortyModalComponent {
  character!: character;
  isVisible = false;

  open(character: character): void {
    this.character = character;
    this.isVisible = true;
  }

  close(): void {
    this.isVisible = false;
  }
}
