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
    { id: 'anexos', label: 'Anexos', hasDot: false},
    { id: 'convenios', label: 'Convênios', hasDot: false },
    { id: 'militar', label: 'Vínculo militar', hasDot: false },
    { id: 'indicacoes', label: 'Indicações', hasDot: false}
  ];

  telefones: Telefone[] = [
    {
      numero: '(11) 98231-4470',
      tipo: 'Celular',
      principal: true
    },
    {
      numero: '(11) 3344-2010',
      tipo: 'Residencial',
      principal: false
    }
  ];

  convenios: Convenio[] = [
    {
      nome: 'Saúde Vida',
      descricao: 'Plano de saúde conveniado',
      status: 'Ativo',
      statusClass: 'status-ativo'
    },
    {
      nome: 'Odonto Plus',
      descricao: 'Rede odontológica',
      status: 'Ativo',
      statusClass: 'status-ativo'
    },
    {
      nome: 'Seguro Auto',
      descricao: 'Seguro veicular parceiro',
      status: 'Não contratado',
      statusClass: 'status-inativo'
    }
  ];

  indicacoes: Indicacao[] = [
    {
      nome: 'Fernanda Lima Souza',
      data: '2021',
      status: 'Ativo'
    },
    {
      nome: 'João Henrique Alves',
      data: '2021',
      status: 'Ativo'
    },
  ]

  anexos: Anexo[] = [
    {
      id: 1,
      nome: 'RG.pdf',
      dataEnvio: '12/03/2021'
    },
    {
      id: 2,
      nome: 'Comprovante de residência.pdf',
      dataEnvio: '12/03/2021'
    },
    {
      id: 3,
      nome: 'Termo de adesão assinado.pdf',
      dataEnvio: '15/03/2021'
    }
  ];

  descarregarAnexo(anexo: Anexo): void {
    console.log(`Descarregando ficheiro: ${anexo.nome}`);
  }

  anexarDocumento(): void {
    console.log('Abrir diálogo para upload de novo documento...');
  }

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

export interface Telefone {
  numero: string;
  tipo: string;
  principal?: boolean;
}

export interface Convenio {
  nome: string;
  descricao: string;
  status: string;
  statusClass: string;
}

export interface Anexo {
  id: number;
  nome: string;
  dataEnvio: string;
  url?: string;
}

export interface Indicacao {
  nome: string,
  data: string,
  status: string
}

