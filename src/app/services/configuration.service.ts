import {Injectable} from '@angular/core';
import {Configuration} from '../models/configuration';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigurationService {

  private config: Configuration;

  constructor(private http: HttpClient) {
  }

  static startupServiceFactory(configService: ConfigurationService): Function {
    return () => configService.load();
  }

  load() {
    this.config = null;
    return this.http
      .get<Configuration>('./assets/config.json')
      .toPromise<Configuration>()
      .then((data: Configuration) => {
        this.config = data;
      })
      .catch(err => {
        console.log('Failed to load startup configuration: ', err);
        Promise.resolve();
      });
  }

  getConfig(): Configuration {
    return this.config;
  }
}
