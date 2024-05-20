import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TramitesPageRoutingModule } from './tramites-routing.module';

import { TramitesPage } from './tramites.page';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TramitesPageRoutingModule,
    PipesModule
  ],
  declarations: [TramitesPage]
})
export class TramitesPageModule {}
