import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConProjectRoutingModule } from './con-project-routing.module';
import { ConProjectPanelComponent } from './con-project-panel/con-project-panel.component';

@NgModule({
  declarations: [ConProjectPanelComponent],
  imports: [
    CommonModule,
    ConProjectRoutingModule
  ]
})

export class ConProjectModule { }
