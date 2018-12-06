import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BasePanelComponent } from './base-panel/base-panel.component';
import { HeaderModule } from 'src/app/_shared/_modules/header/header.module';
import { NoAccessPageComponent } from './no-access-page/no-access-page.component';

@NgModule({
  declarations: [BasePanelComponent, NoAccessPageComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    HeaderModule
  ]
})

export class BaseModule { }
