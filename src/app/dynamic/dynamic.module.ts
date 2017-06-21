import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DynamicComponent} from './dynamic.component';
import {ToolTipDirective} from './tool-tip.directive';

@NgModule({
  imports        : [CommonModule],
  declarations   : [DynamicComponent, ToolTipDirective],
  exports        : [DynamicComponent, ToolTipDirective],
  entryComponents: [DynamicComponent]
})
export class DynamicModule {
}
