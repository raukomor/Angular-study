import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotfoundPageComponent } from './error-notfound-page.component';

describe('ErrorNotfoundPageComponent', () => {
  let component: ErrorNotfoundPageComponent;
  let fixture: ComponentFixture<ErrorNotfoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorNotfoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotfoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
