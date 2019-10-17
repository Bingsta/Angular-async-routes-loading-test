import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponentListComponent } from './page-component-list.component';

describe('PageComponentListComponent', () => {
  let component: PageComponentListComponent;
  let fixture: ComponentFixture<PageComponentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComponentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
