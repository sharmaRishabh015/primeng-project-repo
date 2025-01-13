import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';

import Lara from '@primeng/themes/lara';
import { SharedModule } from './shared/shared.module';
import { ChatComponent } from './components/chat/chat.component';
import { CardsComponent } from './components/cards/cards.component';
import { MoviesComponent } from './components/movies/movies.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { CustomersComponent } from './components/customers/customers.component';


export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Lara
            }
        })
    ]
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CardsComponent,
    MoviesComponent,
    InboxComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FormsModule,
    AvatarModule,
    DividerModule,
    TooltipModule,
    SharedModule
  ],
  providers: [appConfig.providers],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
