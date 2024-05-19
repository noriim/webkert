import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordaddComponent} from "./recordadd.component";

const routes: Routes = [
  { path: '', component: RecordaddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordaddRoutingModule { }
