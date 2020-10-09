import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintainRoutingModule } from './maintain-routing.module';
import { MaintainComponent } from './maintain.component';


@NgModule({
  declarations: [MaintainComponent],
  imports: [
    CommonModule,
    MaintainRoutingModule
  ],
  exports: [MaintainComponent]
})
export class MaintainModule { }
