import { Cocktail } from "../models/cocktail";

export abstract class CocktailService {
    abstract getCocktails(search:string) : Promise<Cocktail[]>;
}
