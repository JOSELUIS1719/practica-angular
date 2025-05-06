import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent {
  @Input() paginaActual: number = 1;
  @Input() totalPaginas: number = 0;

  @Output() newevent = new EventEmitter<number>();

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.newevent.emit(this.paginaActual - 1);
    }
  }

  paginaSiguiente(): void {
    if (this.paginaActual < this.totalPaginas) {
      this.newevent.emit(this.paginaActual + 1);
    }
  }
}
