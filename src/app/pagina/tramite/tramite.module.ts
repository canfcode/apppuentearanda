import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TramitePageRoutingModule } from './tramite-routing.module';

import { TramitePage } from './tramite.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TramitePageRoutingModule,
    PipesModule
  ],
  declarations: [TramitePage]
})
export class TramitePageModule {}
