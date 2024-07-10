import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RoleGuard } from './views/login-module/shared/role-guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'login',
    },
    loadChildren: () =>
      import('./views/login-module/login-module.module').then(
        (m) => m.LoginModuleModule
      ),
  },
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'dashboard',
        canActivate: [RoleGuard],
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'forms',
        canActivate: [RoleGuard],
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule),
      },
      {
        path: 'question-bank',
        canActivate: [RoleGuard],
        loadChildren: () =>
          import('./views/master-questionbank/master-questionbank.module').then(
            (m) => m.MasterQuestionbankModule
          ),
      },
      {
        path: 'pages',
        canActivate: [RoleGuard],
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login-core',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
