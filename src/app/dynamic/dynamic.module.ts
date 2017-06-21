import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DynamicComponent} from './dynamic.component';
import {ToolTipDirective} from './tool-tip.directive';
import {UtilsModule} from '../utils/utils.module';

@NgModule({
  imports        : [CommonModule, UtilsModule.anythingElse()],
  declarations   : [DynamicComponent, ToolTipDirective],
  exports        : [DynamicComponent, ToolTipDirective],
  entryComponents: [DynamicComponent]
})
export class DynamicModule {
}
