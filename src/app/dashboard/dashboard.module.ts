import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { DashboardPreviewComponent } from './components/dashboard-preview/dashboard-preview.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from '../components/chat/chat.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { CustomersComponent } from '../components/customers/customers.component';
import { InboxComponent } from '../components/inbox/inbox.component';
import { CardsComponent } from '../components/cards/cards.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardPreviewComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
];


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPreviewComponent
  ],
  imports: [RouterModule.forChild(routes),
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
