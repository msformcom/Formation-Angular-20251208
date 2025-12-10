import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SalarieService } from '../services/salarie-service';
import { SalariesFranceService } from '../services/salaries-france-service';
import { CocktailService } from '../services/cocktail-service';
import { CocktailRhumerieService } from '../services/cocktail-rhumerie-service';




export const appConfig: ApplicationConfig = {
  // Providers => Injections de dépendances
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection(),
    provideRouter(routes),
    // Si une demande est faite pour le service SalarieService
    // alors fournir une instance de SalariesFranceService

    { provide: CocktailService, useClass: CocktailRhumerieService }
  ]
};
if(new Date().getHours()>20 && new Date().getHours()<6){
  appConfig.providers.push(
    { provide: SalarieService, useClass: SalariesFranceService }
  );
}
else{
 appConfig.providers.push(
    { provide: SalarieService, useClass: SalariesFranceService }
  );
}
