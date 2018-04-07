import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    HttpClient
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
