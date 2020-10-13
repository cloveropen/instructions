import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrcutionsHeaderComponent } from './instrcutions-header.component';

describe('InstrcutionsHeaderComponent', () => {
  let component: InstrcutionsHeaderComponent;
  let fixture: ComponentFixture<InstrcutionsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrcutionsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrcutionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
