import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopPanelComponent } from './desktop-panel/desktop-panel.component';
import { DesktopGuard } from './desktop.guard';

const routes: Routes = [
  { path: '', component: DesktopPanelComponent , canActivate: [DesktopGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DesktopRoutingModule { }
