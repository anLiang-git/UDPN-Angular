import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodesRoutingModule } from './nodes-routing.module';
import { VoteComponent } from './vote/vote.component';


@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    CommonModule,
    NodesRoutingModule
  ]
})
export class NodesModule { }
