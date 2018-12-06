import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopPanelComponent } from './desktop-panel/desktop-panel.component';


@NgModule({
  declarations: [
    DesktopPanelComponent
  ],
  imports: [
    CommonModule,
    DesktopRoutingModule
  ]
})

export class DesktopModule { }
