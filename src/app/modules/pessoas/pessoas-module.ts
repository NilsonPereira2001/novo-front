import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PessoaRoutes } from './pessoas.routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(PessoaRoutes)],
})
export class PessoasModule {}
