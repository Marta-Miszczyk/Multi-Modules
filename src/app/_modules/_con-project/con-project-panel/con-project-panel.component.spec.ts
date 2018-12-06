import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConProjectPanelComponent } from './con-project-panel.component';

describe('ConProjectPanelComponent', () => {
  let component: ConProjectPanelComponent;
  let fixture: ComponentFixture<ConProjectPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConProjectPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConProjectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
