import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Cocktail } from '../models/cocktail';
import { CocktailService } from '../services/cocktail-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Je demande à l'injection de dépendance
  // l'objet associé au service SalarieService

  cocktailService=inject(CocktailService);
  async ngOnInit(){
    // Au démarrage du composant, je charge les employés
    // getSalaries() renvoit une promesse
    // donc j'attend sa résolution avec await
    // et j'affecte le résultat dans this.employes
    
    this.cocktailService.getCocktails("rhum").then(r=>this.boissons=r);
  }


  // Afficher un cocktail dans l'interface libele : "Margarita", composition : "Tekila, jus de citron, grenadine"
  boissons?: Cocktail[];
}
