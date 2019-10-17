import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericHTMLComponent } from './generic-html.component';

describe('GenericHTMLComponent', () => {
  let component: GenericHTMLComponent;
  let fixture: ComponentFixture<GenericHTMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericHTMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
