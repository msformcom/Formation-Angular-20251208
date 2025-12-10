import { Injectable } from '@angular/core';
import { SalarieService } from './salarie-service';
import { Employe } from '../models/employe';
import { ListItem } from '../models/list-item';
import { ListItemDto } from '../dtos/list-item-dto';
import { EmployeDTO } from '../dtos/employe-dto';


@Injectable({
  providedIn: 'root',
})
export class SalariesFranceService implements SalarieService {
  async getSalarieParId(id: number): Promise<Employe> {
   var reponseServer = await fetch('http://localhost:4201/api/salarie/'+id);
   var dto = (await reponseServer.json()) as EmployeDTO;
   return {
      nom: dto.name,
      prenom: dto.surname,
      dateNaissance: new Date(dto.birthDate),
      // le dto peut avoir une structure de salaire différente
      salaire: dto.salary.periodicity=="monthly"? dto.salary.amount: dto.salary.amount/12,
      sympa:dto.cool ?? false
   }
  }
  async getSalaries(): Promise<ListItem[]> {
    // Récupère les salariés à partir du server au format json
    var reponseServer = await fetch('http://localhost:4201/api/salarie'); // la requete HTTP
    // on désérialise le json en tableau d'objets EmployeDTO
    var dtos = (await reponseServer.json()) as ListItemDto[]; // extraction du json
    // Je prend chaque dto envoyé par le server 
    // et je le transforme en Employe
    //await new Promise(resolve => setTimeout(resolve, 5000))
    //throw new Error("Erreur de connexion au serveur des salaires");
    var pocos: ListItem[] = dtos.map(dto => {
      return {
        id: dto.id,
        libelle: dto.l
      };
    });
    return pocos
  }
  createSalarie(salarie: Employe): Promise<Employe> {
    throw new Error('Method not implemented.');
  }

}
