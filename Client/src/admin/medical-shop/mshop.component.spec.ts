import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MshopComponent } from './mshop.component';

describe('MshopComponent', () => {
  let component: MshopComponent;
  let fixture: ComponentFixture<MshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MshopComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
