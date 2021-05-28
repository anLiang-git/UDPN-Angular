import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      {
      path: '',
      redirectTo: 'nodes',
      pathMatch: 'full'
      },            
      {
        path: 'nodes',
        loadChildren: () => import('./nodes/nodes.module').then(m => m.NodesModule),
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
