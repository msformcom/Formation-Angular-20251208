import { Employe } from "../models/employe";

// Représente le service pour géréer les salariés mais sans implémentation pour l'instant
export abstract class SalarieService {
    abstract getSalaries() : Promise<Employe[]>;
    abstract createSalarie(salarie : Employe) : Promise<Employe>;
}
