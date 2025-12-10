import { Injectable } from '@angular/core';
import { SalarieService } from './salarie-service';
import { Employe } from '../models/employe';
import { EmployeDTO } from '../dtos/employe-dto';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalariesFranceService implements SalarieService {
  async getSalaries(): Promise<Employe[]> {
    // Récupère les salariés à partir du server au format json
    var reponseServer = await fetch('/salaries.json'); // la requete HTTP
    // on désérialise le json en tableau d'objets EmployeDTO
    var objetRenvoye = (await reponseServer.json()) as EmployeDTO[]; // extraction du json
    // Je prend chaque dto envoyé par le server 
    // et je le transforme en Employe
    //await new Promise(resolve => setTimeout(resolve, 5000))
    //throw new Error("Erreur de connexion au serveur des salaires");
    var employes: Employe[] = objetRenvoye.map(dto => {
      return {
        nom: dto.surname,
        prenom: dto.name,
        salaire: dto.salary.amount,
        dateNaissance: new Date(dto.birthDate),
        sympa: dto.cool
      }
    });
    return employes
    //  var tab=[1,2,3,4,5,6,2,1];
    //  var tabx2=tab.map(x=>x*2); // [2,4,6,8,10,12,4,2]
    //  var tabPetits=tab.filter(x=>x<4); // [1,2,3,2,1]


  }
  createSalarie(salarie: Employe): Promise<Employe> {
    throw new Error('Method not implemented.');
  }

}
