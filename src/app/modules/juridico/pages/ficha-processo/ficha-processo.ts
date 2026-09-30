import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ficha-processo',
  styleUrl: './ficha-processo.scss',
  templateUrl: './ficha-processo.html',
})
export class FichaProcesso {
  abaAtiva: string = 'dados';

  processo = {
    tipo: 'AÇÃO DE COBRANÇA',
    numero: '0042/2026',
    area: 'Cível',
    urgente: true,
    juizAdvogadoHeader: 'Dr. Ricardo Lemos',
    varaHeader: '2ª Vara Cível — Comarca de Maceió',
    
    // Dados do processo
    varaComarca: '2ª Vara Cível — Maceió/AL',
    advogadoResponsavel: 'Dr. Ricardo Lemos',
    faseAtual: 'Recursal',
    dataAbertura: '18/02/2026',
    valorCausa: 'R$ 24.500,00',
    proximoPrazo: '29/09/2026 — Recurso',
    situacao: 'Urgente',
    objeto: 'Ação de cobrança referente a mensalidades em atraso, com pedido de reconhecimento de dívida e juros contratuais.',
    
    // Associado
    associado: {
      iniciais: 'CR',
      nome: 'Carlos Eduardo Ramos',
      codigo: 'AS-01042 · Efetivo'
    }
  };

  movimentacoes = [
    {
      data: '24/09/2026',
      titulo: 'Recurso protocolado',
      descricao: 'Recurso de apelação protocolado junto ao tribunal, aguardando distribuição.',
      autor: 'Dr. Ricardo Lemos'
    },
    {
      data: '10/09/2026',
      titulo: 'Sentença publicada',
      descricao: 'Sentença parcialmente favorável publicada no diário oficial.',
      autor: 'Sistema'
    },
    {
      data: '02/07/2026',
      titulo: 'Audiência de instrução realizada',
      descricao: 'Oitiva de testemunhas concluída sem acordo entre as partes.',
      autor: 'Dr. Ricardo Lemos'
    },
    {
      data: '18/02/2026',
      titulo: 'Processo distribuído',
      descricao: 'Processo distribuído à 2ª Vara Cível da Comarca de Maceió.',
      autor: 'Sistema'
    }
  ];

  partes = [
    {
      iniciais: 'CR',
      nome: 'Carlos Eduardo Ramos',
      subtitulo: 'Associado · AS-01042',
      papel: 'Autor'
    },
    {
      iniciais: 'EC',
      nome: 'Empresa Comercial Delta Ltda.',
      subtitulo: 'Pessoa jurídica',
      papel: 'Réu'
    },
    {
      iniciais: 'RL',
      nome: 'Dr. Ricardo Lemos',
      subtitulo: 'OAB/AL 12.345',
      papel: 'Advogado da associação'
    },
    {
      iniciais: 'MS',
      nome: 'Dra. Marina Salles',
      subtitulo: 'OAB/AL 9.876',
      papel: 'Advogado contrário'
    }
  ];
}
