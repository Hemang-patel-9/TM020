import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTechtokensComponent } from './dashboard-techtokens.component';

describe('DashboardTechtokensComponent', () => {
  let component: DashboardTechtokensComponent;
  let fixture: ComponentFixture<DashboardTechtokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTechtokensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardTechtokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
