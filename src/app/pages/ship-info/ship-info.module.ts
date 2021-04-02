import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipInfoPageRoutingModule } from './ship-info-routing.module';

import { ShipInfoPage } from './ship-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipInfoPageRoutingModule
  ],
  declarations: [ShipInfoPage]
})
export class ShipInfoPageModule {}
