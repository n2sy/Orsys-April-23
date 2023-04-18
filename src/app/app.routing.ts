import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { DirectComponent } from './direct/direct.component';
import { InfosComponent } from './infos/infos.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  // {
  //   path: 'cv',
  //   component: CvComponent,
  //   children: [
  //     { path: 'add', component: AddComponent },
  //     { path: ':myid', component: InfosComponent },
  //     { path: ':id/edit', component: UpdateComponent },
  //   ],
  // },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      { path: ':myid', component: InfosComponent },
      { path: ':id/edit', component: UpdateComponent },
    ],
  },
  { path: 'ms-word', component: MsWordComponent },
  {
    path: 'servers',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'accounts', component: HomeAccountsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'direct', component: DirectComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const ORSYS_ROUTING = RouterModule.forRoot(myRoutes);
