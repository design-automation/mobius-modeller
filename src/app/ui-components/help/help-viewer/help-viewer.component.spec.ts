import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpViewerComponent } from './help-viewer.component';

describe('HelpViewerComponent', () => {
  let component: HelpViewerComponent;
  let fixture: ComponentFixture<HelpViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
