import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TableContaierComponent } from './table-contaier/table-contaier.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tableContainer', component: TableContaierComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ], 
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
