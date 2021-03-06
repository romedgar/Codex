import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'addManual',
    redirectTo: 'add-manual',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'add-manual',
    loadChildren: () => import('./add-manual/add-manual.module').then( m => m.AddManualPageModule)
  },
  {
    path: 'mostrar-unidades',
    loadChildren: () => import('./mostrar-unidades/mostrar-unidades.module').then( m => m.MostrarUnidadesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'guerreros',
    loadChildren: () => import('./guerreros/guerreros.module').then( m => m.GuerrerosPageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./soporte/soporte.module').then( m => m.SoportePageModule)
  },
  {
    path: 'arqueros',
    loadChildren: () => import('./arqueros/arqueros.module').then( m => m.ArquerosPageModule)
  },
  {
    path: 'asesinos',
    loadChildren: () => import('./asesinos/asesinos.module').then( m => m.AsesinosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
