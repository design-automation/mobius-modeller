import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleboxComponent } from './modulebox.component';

describe('ModuleboxComponent', () => {
  let component: ModuleboxComponent;
  let fixture: ComponentFixture<ModuleboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
