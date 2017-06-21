import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {LoggerService} from './utils/logger.service';


@Component({
  selector     : 'aa-root',
  template     : `
    <aa-child></aa-child>
  `,
})
export class AppComponent {

  public title = 'Hello Title';

  constructor(logger: LoggerService) {
    logger.log('HELLOOO');

  }

}
