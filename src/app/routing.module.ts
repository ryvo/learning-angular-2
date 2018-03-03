import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { EnvironmentSpecificResolver} from './services/environment-specific-resolver';
import { EnvironmentSpecificService} from './services/environment-specific.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', resolve: { envSpecific: EnvironmentSpecificResolver}},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], resolve: { envSpecific: EnvironmentSpecificResolver}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    HttpClient,
    EnvironmentSpecificResolver,
    EnvironmentSpecificService
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
