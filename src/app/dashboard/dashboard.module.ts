import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { DashboardPreviewComponent } from './components/dashboard-preview/dashboard-preview.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardPreviewComponent
  }
];


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPreviewComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModule { }
