import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailIndex } from './cocktail-index';

describe('CocktailIndex', () => {
  let component: CocktailIndex;
  let fixture: ComponentFixture<CocktailIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
