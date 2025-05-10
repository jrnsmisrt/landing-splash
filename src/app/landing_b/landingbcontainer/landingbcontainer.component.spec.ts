import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingbcontainerComponent } from './landingbcontainer.component';

describe('LandingbcontainerComponent', () => {
  let component: LandingbcontainerComponent;
  let fixture: ComponentFixture<LandingbcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingbcontainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingbcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
