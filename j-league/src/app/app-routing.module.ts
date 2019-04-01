import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { navigationPath } from './nav/navigation.constants';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClubsComponent } from './clubs/clubs.component';

const routes: Routes = [{
  path: '/', redirectTo: '/home'
}, {
  path: navigationPath.clubs, component: ClubsComponent
}, {
  path: navigationPath.about, component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
