
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../interfaces/rikand';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}
  
  

  getCharacters(url: string = this.apiUrl): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(url);
  }
  getCharactersByPage(page: number = 1): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?page=${page}`);
  }
  searchCharacters(name: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?name=${name}`);
  }
  private next: string | null = null;
  private last: string | null = null;

  set nextUrl(url: string | null) {
    this.next = url;
  }

  set lastUrl(url: string | null) {
    this.last = url;
  }

  get nextUrl(): string | null {
    return this.next;
  }

  get lastUrl(): string | null {
    return this.last;
  }
}
