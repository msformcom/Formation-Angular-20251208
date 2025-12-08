import { Component, Input } from '@angular/core';
import { Employe } from '../../../models/employe';
import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-salarie-details',
  imports: [CurrencyPipe,DecimalPipe,PercentPipe,DatePipe,UpperCasePipe],
  templateUrl: './salarie-details.html',
  styleUrl: './salarie-details.scss',
})
export class SalarieDetails {
    // Le @Input permet de déléguer l'initialisation de salarie au niveau de la balise
    @Input()
    salarie!: Employe;
}
