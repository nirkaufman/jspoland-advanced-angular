import {NgModule, ModuleWithProviders} from '@angular/core';
import {LoggerService} from './logger.service';
import {StorageService} from './storage.service';
import {UtilsServices} from '../const';


@NgModule({
  providers: [
    {provide: LoggerService, useClass: LoggerService},
    {provide: StorageService, useClass: StorageService},
  ]
})
export class UtilsModule {

  constructor() {

  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilsModule,
      providers: [LoggerService]
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: UtilsModule,
    }
  }

}
