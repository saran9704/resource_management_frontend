import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterQuestionbankComponent } from './master-questionbank.component';

describe('MasterQuestionbankComponent', () => {
  let component: MasterQuestionbankComponent;
  let fixture: ComponentFixture<MasterQuestionbankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterQuestionbankComponent]
    });
    fixture = TestBed.createComponent(MasterQuestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
