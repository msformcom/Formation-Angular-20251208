import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employe } from '../models/employe';
import { SalarieDetails } from "./salarie/salarie-details/salarie-details";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe, SalarieDetails],
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
    boisson={libelle:"Margarita",composition:"Tekila,citron et grenadine"};

  }
