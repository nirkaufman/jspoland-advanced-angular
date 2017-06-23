import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnChanges} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {DynamicControlComponent} from './dynamic-control.component';

@Component({
  selector: 'aa-dynamic-form',
  template: `
    <form [formGroup]="dform">
      <ng-container #entry></ng-container>
    </form>
  `,
  styles  : []
})
export class DynamicFormComponent implements OnChanges {

  @ViewChild('entry', {read: ViewContainerRef}) entry;

  public dform: FormGroup;
  public controlConfig: any[];
  private cfr: ComponentFactoryResolver;

  constructor(cfr: ComponentFactoryResolver) {
    this.cfr   = cfr;
    this.dform = new FormGroup({});

    this.controlConfig = [
      {
        name: 'username',
        placeHolder: 'type your username',
        type: 'text',
        label: 'User Name'
      }
    ]
  }



  ngOnChanges(): void {
    this.controlConfig.forEach(config => {
      this.dform.addControl(config.name, new FormControl());

      const controlFactory  = this.cfr.resolveComponentFactory(DynamicControlComponent);
      const controlInstance = this.entry.createComponent(controlFactory);

      controlInstance.instance.group = this.dform;
      controlInstance.instance.config = config;
    })
  }
}
