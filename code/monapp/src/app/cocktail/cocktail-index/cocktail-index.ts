import { Component, inject } from '@angular/core';
import { Cocktail } from '../../../models/cocktail';
import { CocktailService } from '../../../services/cocktail-service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cocktail-index',
  // On référence ici tout les composants d'angular utilisés dans le template HTML
  imports: [DecimalPipe],
  templateUrl: './cocktail-index.html',
  styleUrl: './cocktail-index.scss',
})
export class CocktailIndex {
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
