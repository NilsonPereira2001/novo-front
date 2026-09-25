import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JuridicoRoutes } from './juridico.routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(JuridicoRoutes)],
})
export class JuridicoModule {}
