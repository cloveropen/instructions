import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { UtilsComponent } from './utils.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [UtilsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UtilsRoutingModule
  ],
  exports: [UtilsComponent]
})
export class UtilsModule { }
