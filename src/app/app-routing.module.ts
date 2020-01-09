import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './pages/table/table.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/table' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
