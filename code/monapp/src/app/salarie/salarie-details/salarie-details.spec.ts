import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarieDetails } from './salarie-details';

describe('SalarieDetails', () => {
  let component: SalarieDetails;
  let fixture: ComponentFixture<SalarieDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarieDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarieDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
