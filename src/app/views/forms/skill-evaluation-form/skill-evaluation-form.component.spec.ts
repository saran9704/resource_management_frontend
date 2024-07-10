import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEvaluationFormComponent } from './skill-evaluation-form.component';

describe('SkillEvaluationComponent', () => {
  let component: SkillEvaluationFormComponent;
  let fixture: ComponentFixture<SkillEvaluationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillEvaluationFormComponent],
    });
    fixture = TestBed.createComponent(SkillEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
