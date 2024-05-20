import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoappPage } from './cursoapp.page';

const routes: Routes = [
  {
    path: '',
    component: CursoappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoappPageRoutingModule {}
