import { Injectable } from '@angular/core';
import { CocktailService } from './cocktail-service';
import { Cocktail } from '../models/cocktail';
import { CocktailDto } from '../dtos/cocktail-dto';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailRhumerieService implements CocktailService {
  async getCocktails(search: string): Promise<Cocktail[]> {
    //let requete=await fetch("https://api.rhumerie.com/cocktails?search="+encodeURIComponent(search) );
    let requete=await fetch("./cocktails.json");
    let dtos=await requete.json() as CocktailDto[];
    //await delay(5000);
    let cocktails:Cocktail[]=dtos.map(dto=>({
        libelle:dto.label,
        composition:dto.ingredients,
        prix:dto.price,
        degreAlcool:dto.alcoholDegree
    }));
    return cocktails

  }
  
}
