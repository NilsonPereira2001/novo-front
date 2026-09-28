import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-ficha-associado',
  styleUrl: './ficha-associado.scss',
  templateUrl: './ficha-associado.html',
})
export class FichaAssociado {
  // Estado do Dropdown
  dropdownAberto = false;

  // Estado das Abas
  abaAtiva = 'dados-gerais';

  tabs = [
    { id: 'dados-gerais', label: 'Dados gerais', hasDot: false },
    { id: 'contatos', label: 'Contatos', hasDot: false },
    { id: 'convenios', label: 'Convênios', hasDot: true },
    { id: 'vinculo-militar', label: 'Vínculo militar', hasDot: true }
  ];

  // Alterna a exibição do menu dropdown "Mais ações"
  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.dropdownAberto = !this.dropdownAberto;
  }

  // Fecha o dropdown caso o utilizador clique fora dele
  @HostListener('document:click')
  fecharDropdown(): void {
    this.dropdownAberto = false;
  }

  selecionarAba(abaId: string): void {
    this.abaAtiva = abaId;
  }

  executarAcao(acao: string): void {
    console.log(`Ação selecionada: ${acao}`);
    this.dropdownAberto = false;
  }
}
