import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintainComponent } from './maintain.component';

const routes: Routes = [
  { path: '', component: MaintainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintainRoutingModule { }
