import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrcutionsFooterComponent } from './instrcutions-footer.component';

describe('InstrcutionsFooterComponent', () => {
  let component: InstrcutionsFooterComponent;
  let fixture: ComponentFixture<InstrcutionsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrcutionsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrcutionsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
