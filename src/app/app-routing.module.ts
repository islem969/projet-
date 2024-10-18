import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichestageComponent } from './affichestage/affichestage.component';
import { DetaillestageComponent } from './detaillestage/detaillestage.component';
import { AjoutdemandeComponent } from './ajoutdemande/ajoutdemande.component';
import { AffichedemandeComponent } from './affichedemande/affichedemande.component';

const routes: Routes = [
  { path: 'affiche-offre', component: AffichestageComponent },
  { path: 'app-detaillestage/:id', component: DetaillestageComponent },
  { path: 'ajoutdemande', component: AjoutdemandeComponent },
  { path: 'affichedemande', component: AffichedemandeComponent },
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
