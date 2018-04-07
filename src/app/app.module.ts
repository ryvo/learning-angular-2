import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { LoginComponent, OverviewComponent } from './components/index';
import { ConfigurationService, AuthenticationService, OAuthTokenService, ApiService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    ConfigurationService,
    AuthenticationService,
    OAuthTokenService,
    ApiService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigurationService.startupServiceFactory,
      deps: [ConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
