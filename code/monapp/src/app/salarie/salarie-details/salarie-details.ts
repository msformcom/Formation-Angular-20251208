import { Component, inject, input } from '@angular/core';
import { Employe } from '../../../models/employe';
import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SalarieService } from '../../../services/salarie-service';

@Component({
  selector: 'app-salarie-details',
  imports: [CurrencyPipe,DecimalPipe,PercentPipe,DatePipe,UpperCasePipe],
  templateUrl: './salarie-details.html',
  styleUrl: './salarie-details.scss',
})
export class SalarieDetails {

    // ActivatedRoute est un objet que j'obtiens de l'injection de dépendance
    // qui contient des informations sur la route en cours
    activatedRoute=inject(ActivatedRoute);
    salarieService=inject(SalarieService);
    
    async ngOnInit(){
        // Aller chercher l'id de l'employé à afficher dans l'URL
        const idSalarie=this.activatedRoute.snapshot.params['id'];
        // J'utilise le service pour récupérer l'employé par son id
        // Asynchronisme => le salarie est = undefined tant que la promesse n'est pas résolue
        this.salarie=await this.salarieService.getSalarieParId(idSalarie);
        
    }
    salarie?: Employe;
}
