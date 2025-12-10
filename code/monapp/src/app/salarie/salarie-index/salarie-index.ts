import { Component, inject } from '@angular/core';
import { Employe } from '../../../models/employe';
import { SalarieService } from '../../../services/salarie-service';
import { ListItem } from '../../../models/list-item';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-salarie-index',
  imports: [RouterLink],
  templateUrl: './salarie-index.html',
  styleUrl: './salarie-index.scss',
})
export class SalarieIndex {
  salarieService=inject(SalarieService);

  async ngOnInit(){
    try {
      this.employes=await this.salarieService.getSalaries();
    }
    catch(err){
      console.error("Erreur lors du chargement des salariés",err);
    }
  }

  erreurChargementEmployes?:string;
  employes?:ListItem[];

}
