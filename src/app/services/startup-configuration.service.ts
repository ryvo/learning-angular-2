import {Injectable} from '@angular/core';
import {StartupConfiguration} from '../models/startup-configuration';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StartupConfigurationService {

  private startupConfig: StartupConfiguration;

  constructor(private http: HttpClient) {
  }

  static startupServiceFactory(startupConfigService: StartupConfigurationService): Function {
    return () => startupConfigService.load();
  }

  public load() {
    this.startupConfig = null;
    return this.http
      .get<StartupConfiguration>('./assets/xconfig.json')
      .toPromise<StartupConfiguration>()
      .then((data: StartupConfiguration) => {
        this.startupConfig = data;
      })
      .catch(err => {
        console.log('Failed to load startup configuration: ', err);
        Promise.resolve();
      });
  }

  public get(): StartupConfiguration {
    return this.startupConfig;
  }
}
