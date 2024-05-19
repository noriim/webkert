import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyrecordsRoutingModule } from './myrecords-routing.module';
import {MyrecordsComponent} from "./myrecords.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    MyrecordsComponent
  ],
    imports: [
        CommonModule,
        MyrecordsRoutingModule,
        MatButtonModule
    ]
})
export class MyrecordsModule { }
