import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  standalone: true,
  templateUrl: './table-pagination.html'
})
export class TablePagination {
    
  totalItems = input.required<number>();
  currentPage = input<number>(1);
  pageSize = input<number>(10);

  // Output (Evento cuando el usuario cambia de página)
  pageChange = output<number>();

  // Calculamos los índices visuales (ej: "Showing 1 to 10...")
  startItem = computed(() => ((this.currentPage() - 1) * this.pageSize()) + 1);
  endItem = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalItems()));

  // Lógica para botones
  isFirstPage = computed(() => this.currentPage() === 1);
  isLastPage = computed(() => this.endItem() >= this.totalItems());

  onPrev() {
    if (!this.isFirstPage()) {
      this.pageChange.emit(this.currentPage() - 1);
    }
  }

  onNext() {
    if (!this.isLastPage()) {
      this.pageChange.emit(this.currentPage() + 1);
    }
  }
}