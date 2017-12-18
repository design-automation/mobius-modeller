import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeLibraryComponent } from './node-library.component';

describe('NodeLibraryComponent', () => {
  let component: NodeLibraryComponent;
  let fixture: ComponentFixture<NodeLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
