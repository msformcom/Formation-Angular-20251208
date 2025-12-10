import { Routes } from '@angular/router';
import { PageAccueil } from './pages/page-accueil/page-accueil';
import { SalarieIndex } from './salarie/salarie-index/salarie-index';
import { PageApropos } from './pages/page-apropos/page-apropos';
import { Page404 } from './pages/page-404/page-404';
import { CocktailIndex } from './cocktail/cocktail-index/cocktail-index';

export const routes: Routes = [
    // url : /accueil => on affiche le composant PageAccueil dans le RouterOutlet
    {path:"accueil", component: PageAccueil},
    // urlvide => redirection vers /accueil
    {path:"", redirectTo:"accueil", pathMatch:"full"    },
    {path:"apropos",component:PageApropos},
    {path:"employe", component:SalarieIndex},
        {path:"cocktail", component:CocktailIndex},
    // Catchall => toute autre url non gérée => page 404
    {path:"**", component:Page404}
];
