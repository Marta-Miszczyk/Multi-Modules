import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConProjectPanelComponent } from './con-project-panel/con-project-panel.component';
import { ConProjectGuard } from './con-project.guard';

const routes: Routes = [
  { path: '', component: ConProjectPanelComponent, canActivate: [ConProjectGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConProjectRoutingModule { }
