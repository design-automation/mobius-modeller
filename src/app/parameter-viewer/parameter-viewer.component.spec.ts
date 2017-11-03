import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterViewerComponent } from './parameter-viewer.component';

describe('ParameterViewerComponent', () => {
  let component: ParameterViewerComponent;
  let fixture: ComponentFixture<ParameterViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
