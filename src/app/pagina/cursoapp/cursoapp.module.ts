import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoappPageRoutingModule } from './cursoapp-routing.module';

import { CursoappPage } from './cursoapp.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoappPageRoutingModule,
    PipesModule
  ],
  declarations: [CursoappPage]
})
export class CursoappPageModule {}
