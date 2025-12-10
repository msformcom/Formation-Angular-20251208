import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageApropos } from './page-apropos';

describe('PageApropos', () => {
  let component: PageApropos;
  let fixture: ComponentFixture<PageApropos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageApropos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageApropos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
