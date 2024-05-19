import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyrecordsComponent} from "./myrecords.component";

const routes: Routes = [
  { path: '', component: MyrecordsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyrecordsRoutingModule { }
