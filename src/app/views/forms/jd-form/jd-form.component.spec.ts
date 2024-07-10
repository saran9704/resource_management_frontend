import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdFormComponent } from './jd-form.component';

describe('JdFormComponent', () => {
  let component: JdFormComponent;
  let fixture: ComponentFixture<JdFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JdFormComponent]
    });
    fixture = TestBed.createComponent(JdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
