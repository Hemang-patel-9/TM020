import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHelpComponent } from './hero-help.component';

describe('HeroHelpComponent', () => {
  let component: HeroHelpComponent;
  let fixture: ComponentFixture<HeroHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
