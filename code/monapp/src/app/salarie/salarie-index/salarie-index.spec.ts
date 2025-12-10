import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarieIndex } from './salarie-index';

describe('SalarieIndex', () => {
  let component: SalarieIndex;
  let fixture: ComponentFixture<SalarieIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarieIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarieIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
