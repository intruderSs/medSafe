import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MshopDashboardComponent } from './mshop-dashboard.component';

describe('MshopDashboardComponent', () => {
  let component: MshopDashboardComponent;
  let fixture: ComponentFixture<MshopDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MshopDashboardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MshopDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
