import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenunciasPageRoutingModule } from './denuncias-routing.module';

import { DenunciasPage } from './denuncias.page';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenunciasPageRoutingModule,
    PipesModule
  ],
  declarations: [DenunciasPage]
})
export class DenunciasPageModule {}
