import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderPanelComponent } from './header-panel/header-panel.component';

const routes: Routes = [
  { path: '', component: HeaderPanelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
