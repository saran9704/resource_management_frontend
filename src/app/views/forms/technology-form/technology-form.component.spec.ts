import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyFormComponent } from './technology-form.component';

describe('TechnologyFormComponent', () => {
  let component: TechnologyFormComponent;
  let fixture: ComponentFixture<TechnologyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyFormComponent]
    });
    fixture = TestBed.createComponent(TechnologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
