import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { OAuthTokenService } from './oauth-token.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(private tokenService: OAuthTokenService, private api: ApiService, private router: Router) { }

  isAuthenticated() {
    return this.tokenService.getToken() !== null;
  }

  authenticate(username: string, password: string) {
    this.api.getToken(username, password).subscribe(data => {
      var token = data['access_token'];
      this.tokenService.setToken(token);
      this.router.navigate(['overview']);
      console.log('Token obtained, user authenticated.');
    });
  }

  getToken() {
    return this.tokenService.getToken();
  }
}
