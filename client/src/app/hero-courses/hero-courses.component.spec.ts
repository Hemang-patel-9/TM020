import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCoursesComponent } from './hero-courses.component';

describe('HeroCoursesComponent', () => {
  let component: HeroCoursesComponent;
  let fixture: ComponentFixture<HeroCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
