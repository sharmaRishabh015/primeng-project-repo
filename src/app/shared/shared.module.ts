import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule} from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ButtonModule } from 'primeng/button'
import { InputIconModule } from 'primeng/inputicon';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidenavComponent } from './sidenav/sidenav.component'
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';

import { MenuItem } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { DatePickerModule } from 'primeng/datepicker';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { MeterGroupModule } from 'primeng/metergroup';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    IconFieldModule,
    InputTextModule,
    BadgeModule,
    OverlayBadgeModule,
    ButtonModule,
    InputIconModule,
    AvatarModule,
    AvatarGroupModule,
    DividerModule,
    TooltipModule,
    FormsModule,
    MenuItemContent,
    MenuModule,
    ChartModule,
    DatePickerModule,
    MeterGroupModule,
    SelectButtonModule,
    TableModule,
    TagModule,
    CarouselModule,
    RouterLink,
  ],
  exports: [
    IconFieldModule,
    InputTextModule,
    BadgeModule,
    OverlayBadgeModule,
     ButtonModule,
     InputIconModule,
     SidenavComponent,
     AvatarModule,
     AvatarGroupModule,
     DividerModule,
     TooltipModule,
     FormsModule,
     MenuItemContent,
    MenuModule,
    ChartModule,
    DatePickerModule,
    MeterGroupModule,
    SelectButtonModule,
    TableModule,
    TagModule,
    CommonModule,
    RouterLink,
    CarouselModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
