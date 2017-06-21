import {Directive, ViewContainerRef, ComponentFactoryResolver, HostListener, Input, ComponentRef} from '@angular/core';
import {DynamicComponent} from './dynamic.component';

@Directive({
  selector: '[aaToolTip]',
  exportAs: 'tp'
})
export class ToolTipDirective {

  public toolTip: ComponentRef<DynamicComponent>;

  @Input() aaToolTip: string;

  constructor(private entry: ViewContainerRef,
              private cfr: ComponentFactoryResolver) {
  }

  @HostListener('click')
  public showToolTip() {
    const cf                   = this.cfr.resolveComponentFactory(DynamicComponent);
    this.toolTip               = this.entry.createComponent(cf);
    this.toolTip.instance.text = this.aaToolTip;
  }

}
