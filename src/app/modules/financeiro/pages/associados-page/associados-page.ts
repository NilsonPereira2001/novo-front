import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    PaginatorModule,
    AvatarModule
  ],
  selector: 'app-associados-page',
  styleUrl: './associados-page.scss',
  templateUrl: './associados-page.html',
})
export class AssociadosPage {
  termoBusca: string = '';
  situacaoSelecionada: string = 'todas';
  planoSelecionado: string = 'todos';

  opcoesSituacao = [
    { label: 'Situação: todas', value: 'todas' },
    { label: 'Em dia', value: 'Em dia' },
    { label: 'Pendente', value: 'Pendente' },
    { label: 'Inadimplente', value: 'Inadimplente' }
  ];

  opcoesPlano = [
    { label: 'Plano: todos', value: 'todos' },
    { label: 'Plano Ouro', value: 'Plano Ouro' },
    { label: 'Plano Prata', value: 'Plano Prata' },
    { label: 'Plano Básico', value: 'Plano Básico' }
  ];

  associados: Associado[] = [
    {
      id: '1',
      iniciais: 'HR',
      nome: 'Helena Rocha',
      matricula: 'AS-0241',
      plano: 'Plano Ouro',
      mensalidade: 'R$ 180,00',
      vencimento: '05/10/2026',
      situacao: 'Em dia'
    },
    {
      id: '2',
      iniciais: 'AF',
      nome: 'Afonso Freire',
      matricula: 'AS-0299',
      plano: 'Plano Prata',
      mensalidade: 'R$ 120,00',
      vencimento: '28/09/2026',
      situacao: 'Pendente'
    },
    {
      id: '3',
      iniciais: 'JB',
      nome: 'João Batista Nogueira',
      matricula: 'AS-0987',
      plano: 'Plano Ouro',
      mensalidade: 'R$ 180,00',
      vencimento: '10/08/2026',
      situacao: 'Inadimplente'
    },
    {
      id: '4',
      iniciais: 'PM',
      nome: 'Patrícia Andrade Melo',
      matricula: 'AS-1050',
      plano: 'Plano Básico',
      mensalidade: 'R$ 80,00',
      vencimento: '12/10/2026',
      situacao: 'Em dia'
    }
  ];

  exportar(): void {
    console.log('Exportando dados...');
  }

  verFatura(associado: Associado): void {
    console.log('Ver fatura:', associado);
  }

  cobrar(associado: Associado): void {
    console.log('Cobrar associado:', associado);
  }
}

interface Associado {
  id: string;
  iniciais: string;
  nome: string;
  matricula: string;
  plano: string;
  mensalidade: string;
  vencimento: string;
  situacao: 'Em dia' | 'Pendente' | 'Inadimplente';
}
