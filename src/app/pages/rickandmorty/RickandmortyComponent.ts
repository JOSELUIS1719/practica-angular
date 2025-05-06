import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RickandmortyCardComponent } from './card/card.component';
import { RickAndMortyService } from './services/services.component';
import { character } from './interfaces/rikand';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { BuscarComponent } from './search/search.component';

@Component({
  selector: 'app-rickandmorty',
  standalone: true,
  imports: [
    CommonModule,
    RickandmortyCardComponent,
    PaginacionComponent,
    BuscarComponent  
  ],
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {
  charactersAll: character[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  isLoading: boolean = false;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadCharacters(this.currentPage);
  }

  loadCharacters(page: number): void {
    this.isLoading = true;
    this.rickAndMortyService.getCharactersByPage(page).subscribe({
      next: (data) => {
        this.charactersAll = data.results;
        this.totalPages = data.info.pages;
        this.currentPage = page;
        this.rickAndMortyService.nextUrl = data.info.next;
        this.rickAndMortyService.lastUrl = data.info.prev;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading characters:', err);
        this.isLoading = false;
      }
    });
  }

  onPageChange(newPage: number): void {
    if (newPage !== this.currentPage) {
      this.loadCharacters(newPage);
    }
  }

  setRikand(page: number): void {
    this.loadCharacters(page);  
  }

  searchCharacterByIdPaginated(id: number, page: number = 1): void {
    this.rickAndMortyService.getCharactersByPage(page).subscribe({
      next: (data) => {
        const found = data.results.find((char: any) => char.id === id);
        if (found) {
          this.charactersAll = [found];
          this.totalPages = 1;
          this.currentPage = 1;
          this.isLoading = false;
        } else if (page < data.info.pages) {
          this.searchCharacterByIdPaginated(id, page + 1); 
        } else {
          this.charactersAll = [];
          this.isLoading = false;
          console.warn('No se encontró el personaje con ese ID');
        }
      },
      error: (err) => {
        console.error('Error al buscar por ID:', err);
        this.isLoading = false;
      }
    });
  }
  

  onSearch(term: string): void {
    if (!term) {
      this.loadCharacters(1); 
      return;
    }
  
    this.isLoading = true;
  
    const isNumeric = /^\d+$/.test(term);
  
    if (isNumeric) {
      this.searchCharacterByIdPaginated(+term);
    } else {
      this.rickAndMortyService.searchCharacters(term).subscribe({
        next: (data) => {
          this.charactersAll = data.results || [];
          this.totalPages = 1;
          this.currentPage = 1;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error al buscar personajes por nombre:', err);
          this.isLoading = false;
        }
      });
    }
  }
  
  
}
