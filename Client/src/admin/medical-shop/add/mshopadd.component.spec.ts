import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MshopAddComponent } from './mshopadd.component';

describe('MshopAddComponent', () => {
  let component: MshopAddComponent;
  let fixture: ComponentFixture<MshopAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MshopAddComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MshopAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
