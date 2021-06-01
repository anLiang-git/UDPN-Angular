import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { MainComponent } from './main.component';
import { SimulationComponent } from './simulation/simulation/simulation.component';

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
        path: 'currency',
        component: CurrencyComponent
      },
      {
        path: 'simulation',
        component: SimulationComponent
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
