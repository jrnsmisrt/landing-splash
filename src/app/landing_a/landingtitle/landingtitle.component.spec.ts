import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingtitleComponent } from './landingtitle.component';

describe('LandingtitleComponent', () => {
  let component: LandingtitleComponent;
  let fixture: ComponentFixture<LandingtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingtitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
