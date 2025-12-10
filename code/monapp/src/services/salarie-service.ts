import { Employe } from "../models/employe";
import { ListItem } from "../models/list-item";

// Représente le service pour géréer les salariés mais sans implémentation pour l'instant
export abstract class SalarieService {
    abstract getSalaries() : Promise<ListItem[]>;
    abstract getSalarieParId(id:number) : Promise<Employe>;
    abstract createSalarie(salarie : Employe) : Promise<Employe>;
}
