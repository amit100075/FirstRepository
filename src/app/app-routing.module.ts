import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path: '',
  redirectTo: 'AppComponent',
  pathMatch: 'full'
}, {
  path: 'view',
  component: ViewComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
