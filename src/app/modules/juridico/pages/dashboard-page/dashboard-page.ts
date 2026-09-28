import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';


interface ProcessoRecente {
  iniciais: string;
  nome: string;
  matricula: string;
  processo: string;
  area: string;
  fase: string;
  situacao: 'Urgente' | 'Em andamento' | 'Regular';
}

interface PrazoProximo {
  titulo: string;
  processo: string;
  cliente: string;
  tempo: string;
  urgenciaClass: string;
}

@Component({
  imports: [CommonModule, ChartModule, TableModule],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
 // Dados para o Gráfico de Barras
  areaChartData = [
    { area: 'Cível', percentage: 85 },
    { area: 'Trabalhista', percentage: 60 },
    { area: 'Previdenciário', percentage: 35 },
    { area: 'Administrativo', percentage: 22 },
    { area: 'Outros', percentage: 12 }
  ];

  // Lista de Prazos Próximos
  prazosProximos = [
    {
      tipo: 'Recurso',
      processo: '0042/2026',
      associado: 'Carlos Eduardo Ramos',
      prazo: 'Amanhã',
      badgeClass: 'badge-red'
    },
    {
      tipo: 'Audiência',
      processo: '0038/2026',
      associado: 'Fernanda Lima Souza',
      prazo: '2 dias',
      badgeClass: 'badge-orange'
    },
    {
      tipo: 'Manifestação',
      processo: '0051/2026',
      associado: 'João Batista Nogueira',
      prazo: '5 dias',
      badgeClass: 'badge-yellow'
    }
  ];

  // Lista de Processos Recentes
  processosRecentes = [
    {
      nome: 'Carlos Eduardo Ramos',
      codigo: 'AS-01042',
      avatar: 'CR',
      processo: '0042/2026',
      area: 'Cível',
      fase: 'Recurso Interposto'
    },
    {
      nome: 'Fernanda Lima Souza',
      codigo: 'AS-01043',
      avatar: 'FL',
      processo: '0038/2026',
      area: 'Trabalhista',
      fase: 'Instrução Processual'
    },
    {
      nome: 'João Batista Nogueira',
      codigo: 'AS-00987',
      avatar: 'JB',
      processo: '0051/2026',
      area: 'Previdenciário',
      fase: 'Aguardando Perícia'
    }
  ];
}
