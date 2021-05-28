import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodeListComponent } from './node-list/node-list.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nodeList',
    pathMatch: 'full'
  },
  {
    path: 'nodeList',
    component: NodeListComponent
  },
  {
    path: 'vote',
    component: VoteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NodesRoutingModule { }
