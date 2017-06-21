import {Component, Input} from '@angular/core';

@Component({
  selector: 'aa-tab',
  template: `
    <div *ngIf="active">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {

  @Input()
  public label: string;

  private _active: boolean;

  constructor() {
    this._active = false;
  }

  public get active(): boolean {
    return this._active;
  }

  public set active(value: boolean) {
    this._active = value;
  }
}
