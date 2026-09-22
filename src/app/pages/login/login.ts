import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [
    FormsModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    ButtonModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  cpf: string = '';
  senha: string = '';

  onLogin() {
    console.log('CPF:', this.cpf);
    console.log('Senha:', this.senha);
  }
}
