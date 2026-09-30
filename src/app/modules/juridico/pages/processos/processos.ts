import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-processos',
  styleUrl: './processos.scss',
  templateUrl: './processos.html',
})
export class Processos {

  tabs = ['Todos', 'Em andamento', 'Urgentes', 'Suspensos', 'Arquivados'];
  activeTab = 'Todos';

  searchQuery = '';
  selectedArea = 'todas';
  selectedAdvogado = 'todos';

  currentPage = 1;
  totalPages = 3;
  pages = [1, 2, 3];

  processos: Processo[] = [
    {
      numero: '0042/2026',
      tipo: 'Ação de cobrança',
      associado: 'Carlos Eduardo Ramos',
      codigo: 'AS-01042',
      avatar: 'CR',
      area: 'Cível',
      advogado: 'Dr. Ricardo Lemos',
      prazo: '29/09/2026',
      urgente: true,
      situacao: 'Urgente',
      situacaoClass: 'badge-urgente',
      statusTab: 'Urgentes'
    },
    {
      numero: '0038/2026',
      tipo: 'Reclamação trabalhista',
      associado: 'Fernanda Lima Souza',
      codigo: 'AS-01043',
      avatar: 'FL',
      area: 'Trabalhista',
      advogado: 'Dra. Camila Duarte',
      prazo: '30/09/2026',
      urgente: true,
      situacao: 'Urgente',
      situacaoClass: 'badge-urgente',
      statusTab: 'Urgentes'
    },
    {
      numero: '0051/2026',
      tipo: 'Revisão de benefício',
      associado: 'João Batista Nogueira',
      codigo: 'AS-00987',
      avatar: 'JB',
      area: 'Previdenciário',
      advogado: 'Dr. Ricardo Lemos',
      prazo: '03/10/2026',
      urgente: false,
      situacao: 'Em andamento',
      situacaoClass: 'badge-andamento',
      statusTab: 'Em andamento'
    },
    {
      numero: '0029/2026',
      tipo: 'Recurso administrativo',
      associado: 'Patrícia Andrade Melo',
      codigo: 'AS-01050',
      avatar: 'PM',
      area: 'Administrativo',
      advogado: 'Dra. Camila Duarte',
      prazo: '05/10/2026',
      urgente: false,
      situacao: 'Regular',
      situacaoClass: 'badge-regular',
      statusTab: 'Em andamento'
    },
    {
      numero: '0011/2025',
      tipo: 'Ação de indenização',
      associado: 'Afonso Freire',
      codigo: 'AS-00299',
      avatar: 'AF',
      area: 'Cível',
      advogado: 'Dr. Ricardo Lemos',
      prazo: '—',
      urgente: false,
      situacao: 'Arquivado',
      situacaoClass: 'badge-arquivado',
      statusTab: 'Arquivados'
    }
  ];

  get processosFiltrados(): Processo[] {
    return this.processos.filter(item => {
      // Filtro de Tab
      const matchesTab = this.activeTab === 'Todos' || item.statusTab === this.activeTab;

      // Filtro de Busca
      const query = this.searchQuery.toLowerCase();
      const matchesSearch = !query || 
        item.numero.toLowerCase().includes(query) || 
        item.associado.toLowerCase().includes(query);

      // Filtro de Área
      const matchesArea = this.selectedArea === 'todas' || item.area === this.selectedArea;

      // Filtro de Advogado
      const matchesAdv = this.selectedAdvogado === 'todos' || item.advogado === this.selectedAdvogado;

      return matchesTab && matchesSearch && matchesArea && matchesAdv;
    });
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

  onSearchChange(): void {
    this.currentPage = 1;
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  exportar(): void {
    console.log('Exportando processos...');
  }

  novoProcesso(): void {
    console.log('Abrir modal de novo processo...');
  }
}

export interface Processo {
  numero: string;
  tipo: string;
  associado: string;
  codigo: string;
  avatar: string;
  area: string;
  advogado: string;
  prazo: string;
  urgente: boolean;
  situacao: string;
  situacaoClass: string;
  statusTab: string;
}
