import 'rxjs/add/operator/catch.js';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Configuration } from '../models/configuration';
import { ConfigurationService } from './configuration.service';
import { OAuthTokenService } from './oauth-token.service';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {

  constructor(private configService: ConfigurationService, private http: HttpClient, private tokenService: OAuthTokenService,
  private router: Router) { }

  getToken(username: string, password: string) {
    let config: Configuration = this.configService.getConfig();

    let httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Basic ' + btoa(config.clientID + ':' + config.clientSecret)
      })
    };

    let formData: FormData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post(config.oauthGetTokenURL, formData, httpOptions);
  }

  sendRequest(method: string, url: string, data: any) : Promise<any> {
    let token = this.tokenService.getToken();

    return this.http.request(method, url, {
      body: data,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Authorization': 'bearer ' + token,
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).toPromise().catch((res) => this.handleError(res));
  }

  handleError(response: any) {
    if (response.status === 401 || response.status === 403) {
      this.tokenService.deleteToken();
      this.router.navigate(['login']);
    }
  }

  getCurrentUser() {
    return this.sendRequest('GET', this.configService.getConfig().apiURL + '/members/current-user', null);
  }
}
