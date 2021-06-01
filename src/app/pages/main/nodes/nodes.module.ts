import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodesRoutingModule } from './nodes-routing.module';
import { VoteComponent } from './vote/vote.component';
import { AddComponent } from './node-list/component/add/add.component';
import { SharedModule } from 'src/common/shared.module';



@NgModule({
  declarations: [
    VoteComponent,
    AddComponent   
  ],
  imports: [
    CommonModule,
    NodesRoutingModule,
    SharedModule
  ]
})
export class NodesModule { }
