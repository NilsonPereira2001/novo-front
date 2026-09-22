import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { MainLayoutComponent } from './layout/main/main';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
        {
            path: "home",
            loadChildren: () => import('./modules/home/home-module').then(m => m.HomeModule)
        },
        {
          path: "pessoas",
          loadChildren: () => import('./modules/pessoas/pessoas-module').then(m => m.PessoasModule)
        }

    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
