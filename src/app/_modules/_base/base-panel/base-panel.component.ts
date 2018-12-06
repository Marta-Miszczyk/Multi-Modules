import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-panel',
  templateUrl: './base-panel.component.html',
  styleUrls: ['./base-panel.component.scss']
})

export class BasePanelComponent implements OnInit {

  constructor(private router: Router) { }

  // decide which sub-module load as a first page
  ngOnInit() {
    let start_page = '401';
    const is_Ramona = false;
    const is_Manager = true;

    if (is_Ramona) {
      start_page = 'desktop';
    } else if (is_Manager) {
      start_page = 'project';
    }

    this.router.navigate([start_page]);
  }

}
