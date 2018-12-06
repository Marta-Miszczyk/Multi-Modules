import { BasePanelComponent } from './base-panel/base-panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';
import { NoAccessPageComponent } from './no-access-page/no-access-page.component';
import { ModuleGuard } from './module.guard';

const routes: Routes = [
  { path: '', component: BasePanelComponent, data: {title: 'Activities'},
    children: [
      { path: '401', component: NoAccessPageComponent },
      { path: 'desktop', loadChildren: '../_desktop/desktop.module#DesktopModule', canLoad: [ModuleGuard] },
      { path: 'project', loadChildren: '../_con-project/con-project.module#ConProjectModule', canLoad: [ModuleGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BaseRoutingModule { }
