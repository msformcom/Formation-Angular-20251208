// généré par "ng g component cocktail-details" dans terminal
import { Component, Input } from '@angular/core';
import { Cocktail } from '../../../models/cocktail';
import { DecimalPipe, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-cocktail-details',
  imports: [TitleCasePipe,DecimalPipe],
  templateUrl: './cocktail-details.html',
  styleUrl: './cocktail-details.scss',
})
export class CocktailDetails {
  @Input()  // Autorise de recevoir une donnée depuis le parent
  cocktail! : Cocktail;
}
