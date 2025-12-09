import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employe } from '../models/employe';
import { SalarieDetails } from "./salarie/salarie-details/salarie-details";
import { Cocktail } from '../models/cocktail';
import { CocktailDetails } from './cocktail/cocktail-details/cocktail-details';
import { SalarieService } from '../services/salarie-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SalarieDetails, CocktailDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Je demande à l'injection de dépendance
  // l'objet associé au service SalarieService
  employeService = inject(SalarieService);

  async ngOnInit(){
    // Au démarrage du composant, je charge les employés
    // getSalaries() renvoit une promesse
    // donc j'attend sa résolution avec await
    // et j'affecte le résultat dans this.employes
    this.employes=await this.employeService.getSalaries();
  }

  // Tableau d'employés [] (facultatif car au début il n'y en a pas encore)
  employes?: Employe[];



  // Afficher un cocktail dans l'interface libele : "Margarita", composition : "Tekila, jus de citron, grenadine"
  boissons: Cocktail[] = [
    { libelle: "Margarita", composition: "Tekila, jus de citron, grenadine", prix: 8.5 },
    { libelle: "Pina Colada", composition: "Rhum, jus d'ananas, lait de coco", prix: 9.0, degreAlcool: 12 },
    { libelle: "Virgin Mojito", composition: "Jus de citron vert, menthe, eau gazeuse", prix: 6.0 },
    { libelle: "Cosmopolitan", composition: "Vodka, triple sec, jus de cranberry, jus de citron vert", prix: 10.0, degreAlcool: 14 },
    { libelle: "Bloody Mary", composition: "Vodka, jus de tomate, épices", prix: 9.5, degreAlcool: 13 }
  ];
}
