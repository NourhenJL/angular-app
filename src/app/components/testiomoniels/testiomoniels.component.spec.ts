import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiomonielsComponent } from './testiomoniels.component';

describe('TestiomonielsComponent', () => {
  let component: TestiomonielsComponent;
  let fixture: ComponentFixture<TestiomonielsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestiomonielsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestiomonielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
