import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employe } from '../models/employe';
import { SalarieDetails } from "./salarie/salarie-details/salarie-details";
import { Cocktail } from '../models/cocktail';
import { CocktailDetails } from './cocktail/cocktail-details/cocktail-details';
import { SalarieService } from '../services/salarie-service';
import { CocktailService } from '../services/cocktail-service';

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
  cocktailService=inject(CocktailService);
  async ngOnInit(){
    // Au démarrage du composant, je charge les employés
    // getSalaries() renvoit une promesse
    // donc j'attend sa résolution avec await
    // et j'affecte le résultat dans this.employes
    this.employeService.getSalaries()
      .then(r=>this.employes=r)
      .catch(err=>{
        this.erreurChargementEmployes="Erreur lors du chargement des employés";
      });
    this.cocktailService.getCocktails("rhum").then(r=>this.boissons=r);
  }

  erreurChargementEmployes?:string;

  // Tableau d'employés [] (facultatif car au début il n'y en a pas encore)
  employes?: Employe[];

  // Afficher un cocktail dans l'interface libele : "Margarita", composition : "Tekila, jus de citron, grenadine"
  boissons?: Cocktail[];
}
