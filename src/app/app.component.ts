import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './_shared/_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'CLM-Next';
}
