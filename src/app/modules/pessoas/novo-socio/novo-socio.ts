import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    SelectModule,
    DatePickerModule,
    RadioButtonModule,
    ButtonModule
  ],
  selector: 'app-novo-socio',
  styleUrl: './novo-socio.scss',
  templateUrl: './novo-socio.html',
})
export class NovoSocio implements OnInit{

  visibleCardMilitar: boolean = false

  constructor(){}

  ngOnInit(): void {
    
  }

  


  opcoesSexo = [
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Outro', value: 'Outro' }
  ];

  opcoesEstadoCivil = [
    { label: 'Solteiro(a)', value: 'Solteiro(a)' },
    { label: 'Casado(a)', value: 'Casado(a)' },
    { label: 'Divorciado(a)', value: 'Divorciado(a)' },
    { label: 'Viúvo(a)', value: 'Viúvo(a)' }
  ];

  opcoesTipoConta = [
    { label: 'Conta corrente', value: 'Conta corrente' },
    { label: 'Conta poupança', value: 'Conta poupança' },
    { label: 'Conta de pagamento', value: 'Conta de pagamento' }
  ];

  // Modelos de dados selecionados
  sexoSelecionado = 'Feminino';
  estadoCivilSelecionado = 'Solteiro(a)';
  tipoContaSelecionado = 'Conta corrente';
  dataNascimento: Date | null = null;

  tiposTelefone = [
    { label: 'Celular', value: 'Celular' },
    { label: 'Residencial', value: 'Residencial' },
    { label: 'Comercial', value: 'Comercial' },
    { label: 'WhatsApp', value: 'WhatsApp' }
  ];

  // Lista dinâmica de telefones (inicia com 2 conforme a imagem)
  telefones: TelefoneItem[] = [
    { id: 1, tipo: 'Celular', numero: '' },
    { id: 2, tipo: 'Celular', numero: '' }
  ];

  // ID do telefone marcado como principal (inicia no primeiro)
  telefonePrincipalId: number = 1;

  adicionarTelefone(): void {
    const novoId = new Date().getTime();
    this.telefones.push({
      id: novoId,
      tipo: 'Celular',
      numero: ''
    });

    // Se for o único, define como principal
    if (this.telefones.length === 1) {
      this.telefonePrincipalId = novoId;
    }
  }

  removerTelefone(id: number): void {
    if (this.telefones.length <= 1) return; // Mantém pelo menos um campo

    this.telefones = this.telefones.filter(item => item.id !== id);

    // Se removeu o que era o principal, redefine para o primeiro da lista
    if (this.telefonePrincipalId === id && this.telefones.length > 0) {
      this.telefonePrincipalId = this.telefones[0].id;
    }
  }
}

interface TelefoneItem {
  id: number;
  tipo: string;
  numero: string;
}