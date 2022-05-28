import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MshopViewComponent } from './mshopview.component';

describe('MshopViewComponent', () => {
  let component: MshopViewComponent;
  let fixture: ComponentFixture<MshopViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MshopViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MshopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
