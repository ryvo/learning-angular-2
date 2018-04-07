import { Injectable } from '@angular/core';
import { appVariables } from '../app.constants';

@Injectable()
export class OAuthTokenService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(appVariables.accessTokenLocalStorageKey, token);
  }

  getToken() {
    return localStorage.getItem(appVariables.accessTokenLocalStorageKey);
  }

  deleteToken() {
    localStorage.removeItem(appVariables.accessTokenLocalStorageKey);
  }
}
