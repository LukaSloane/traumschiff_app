import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpointsPageRoutingModule } from './viewpoints-routing.module';

import { ViewpointsPage } from './viewpoints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpointsPageRoutingModule
  ],
  declarations: [ViewpointsPage]
})
export class ViewpointsPageModule {}
