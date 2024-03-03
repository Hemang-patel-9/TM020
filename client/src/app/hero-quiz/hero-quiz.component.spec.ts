import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroQuizComponent } from './hero-quiz.component';

describe('HeroQuizComponent', () => {
  let component: HeroQuizComponent;
  let fixture: ComponentFixture<HeroQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
