import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RouterLink } from '@angular/router';

interface Person {
  initials: string;
  name: string;
  code: string;
  since: string;
  category: string;
  phone: string;
  status: 'Ativo' | 'Pendente' | 'Inativo';
  restricao: string;
}

@Component({
  imports: [CommonModule, TableModule, AvatarModule, ButtonModule, IconFieldModule, InputIconModule, RouterLink],
  selector: 'app-pessoas-page',
  styleUrl: './pessoas-page.scss',
  templateUrl: './pessoas-page.html'
})
export class PessoasPage {
  filters: string[] = ['Todos', 'Associados', 'Dependentes', 'Funcionários'];
  selectedFilter: string = 'Todos';

  people: Person[] = [
    { initials: 'HR', name: 'Helena Rocha', code: 'AS-0241', since: '2021', category: 'Associado', phone: '(11) 98231-4470', status: 'Ativo', restricao: "NÃO POSSUI"},
    { initials: 'TO', name: 'Tiago Oliveira', code: 'DP-0512', since: '2023', category: 'Dependente', phone: '(11) 97766-2010', status: 'Pendente', restricao: "NÃO POSSUI" },
    { initials: 'LP', name: 'Larissa Prado', code: 'FN-0021', since: '2019', category: 'Funcionário', phone: '(11) 96540-8891', status: 'Ativo', restricao: "NÃO POSSUI" },
    { initials: 'AF', name: 'Afonso Freire', code: 'AS-0299', since: '2022', category: 'Associado', phone: '(11) 95120-3345', status: 'Inativo', restricao: "NÃO POSSUI" },
    { initials: 'RD', name: 'Renata Dias', code: 'DP-0540', since: '2024', category: 'Dependente', phone: '(11) 98804-1022', status: 'Ativo', restricao: "NÃO POSSUI" },
    { initials: 'JA', name: 'João Henrique Alves', code: 'FN-0018', since: '2020', category: 'Funcionário', phone: '(11) 99104-8220', status: 'Ativo', restricao: "NÃO POSSUI" }
  ];
}
