import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employe } from '../models/employe';
import { SalarieDetails } from "./salarie/salarie-details/salarie-details";
import { Cocktail } from '../models/cocktail';
import { CocktailDetails } from './cocktail/cocktail-details/cocktail-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  SalarieDetails, CocktailDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // il existe une information employé à afficher
    employe : Employe={nom:"Mauras", prenom:"Dominique", dateNaissance:new Date(1968,18,-5), salaire:101010.981,sympa:true};

    // Tableau d'employés []
    employes : Employe[]=[
      {nom:"Mauras", prenom:"Dominique", dateNaissance:new Date(1968,18,-5), salaire:101010.981,sympa:true},
      {nom:"Dupont", prenom:"Pierre", dateNaissance:new Date(1968,12,-5), salaire:101010.981,sympa:false},
      {nom:"Durant", prenom:"Paul", dateNaissance:new Date(1968,18,-5), salaire:101010.981}
    ];
  
    // Afficher un cocktail dans l'interface libele : "Margarita", composition : "Tekila, jus de citron, grenadine"
    boissons: Cocktail[] = [
      { libelle: "Margarita", composition: "Tekila, jus de citron, grenadine", prix: 8.5 },
      { libelle: "Pina Colada", composition: "Rhum, jus d'ananas, lait de coco", prix: 9.0, degreAlcool: 12 },
      { libelle: "Virgin Mojito", composition: "Jus de citron vert, menthe, eau gazeuse", prix: 6.0 },
      { libelle: "Cosmopolitan", composition: "Vodka, triple sec, jus de cranberry, jus de citron vert", prix: 10.0, degreAlcool: 14},
      { libelle: "Bloody Mary", composition: "Vodka, jus de tomate, épices", prix: 9.5, degreAlcool: 13 }
    ];
  }
