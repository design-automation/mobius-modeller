import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureViewerComponent } from './procedure-viewer.component';

describe('ProcedureViewerComponent', () => {
  let component: ProcedureViewerComponent;
  let fixture: ComponentFixture<ProcedureViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
