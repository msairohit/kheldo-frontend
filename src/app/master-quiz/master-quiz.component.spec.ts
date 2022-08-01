import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterQuizComponent } from './master-quiz.component';

describe('MasterQuizComponent', () => {
  let component: MasterQuizComponent;
  let fixture: ComponentFixture<MasterQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
