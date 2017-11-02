import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamaterViewerComponent } from './paramater-viewer.component';

describe('ParamaterViewerComponent', () => {
  let component: ParamaterViewerComponent;
  let fixture: ComponentFixture<ParamaterViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamaterViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamaterViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
