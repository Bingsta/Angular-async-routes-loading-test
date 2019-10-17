import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestamonialModuleComponent } from './testamonial-module.component';

describe('TestamonialModuleComponent', () => {
  let component: TestamonialModuleComponent;
  let fixture: ComponentFixture<TestamonialModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestamonialModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestamonialModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
