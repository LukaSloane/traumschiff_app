import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivemapPageRoutingModule } from './livemap-routing.module';

import { LivemapPage } from './livemap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivemapPageRoutingModule
  ],
  declarations: [LivemapPage]
})
export class LivemapPageModule {}
