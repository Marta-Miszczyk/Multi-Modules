import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { ChatComponent } from './chat/chat.component';
import { BasketComponent } from './basket/basket.component';
import { HamburgerBtnComponent } from './hamburger-btn/hamburger-btn.component';
import { HeaderPanelComponent } from './header-panel/header-panel.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
  declarations: [
    BasketComponent,
    ChatComponent,
    HamburgerBtnComponent,
    HeaderPanelComponent,
    NotificationsComponent,
    UserNavComponent
  ],
  exports: [
    HeaderPanelComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})

export class HeaderModule { }
