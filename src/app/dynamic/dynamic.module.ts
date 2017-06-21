import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UtilsModule} from '../utils/utils.module';
import {DynamicComponent} from './dynamic.component';
import {ToolTipDirective} from './tool-tip.directive';

@NgModule({
  imports        : [CommonModule, UtilsModule.forChild()],
  declarations   : [DynamicComponent, ToolTipDirective],
  exports        : [DynamicComponent, ToolTipDirective],
  entryComponents: [DynamicComponent]
})
export class DynamicModule {

  constructor() {

  }

  public init() {
    console.log('init');
  }

}
