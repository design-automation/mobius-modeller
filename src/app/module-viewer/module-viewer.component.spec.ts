import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleViewerComponent } from './module-viewer.component';

describe('ModuleViewerComponent', () => {
  let component: ModuleViewerComponent;
  let fixture: ComponentFixture<ModuleViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
