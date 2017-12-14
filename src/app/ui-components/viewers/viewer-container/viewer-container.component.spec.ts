import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerContainerComponent } from './viewer-container.component';

describe('ViewerContainerComponent', () => {
  let component: ViewerContainerComponent;
  let fixture: ComponentFixture<ViewerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
