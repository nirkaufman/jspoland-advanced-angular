import {NgModule, ModuleWithProviders} from '@angular/core';
import {LoggerService} from './logger.service';


@NgModule({})
export class UtilsModule {

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
