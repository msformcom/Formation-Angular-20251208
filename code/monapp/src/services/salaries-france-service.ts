import { Injectable } from '@angular/core';
import { SalarieService } from './salarie-service';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root',
})
export class SalariesFranceService implements SalarieService {
  getSalaries(): Promise<Employe[]> {
    // Récupère les salariés à partir du server au format json
     var requete= fetch('/salaries.json')
  }
  createSalarie(salarie: Employe): Promise<Employe> {
    throw new Error('Method not implemented.');
  }

}
