import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { DirectComponent } from './direct/direct.component';
import { InfosComponent } from './infos/infos.component';
import { UpdateComponent } from './update/update.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:myid', component: InfosComponent },
  { path: 'cv/:id/edit', component: UpdateComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'accounts', component: HomeAccountsComponent },
  { path: 'direct', component: DirectComponent },
];

export const ORSYS_ROUTING = RouterModule.forRoot(myRoutes);
