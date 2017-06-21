import {Component} from '@angular/core';

@Component({
  selector: 'aa-sidebar',
  template: `
    <div *ngIf="flag">
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  `,
  styles  : []
})
export class SidebarComponent {

  private _flag: boolean;

  constructor() {
    this._flag = true;
  }

  public get flag(): boolean {
    return this._flag;
  }

  public set flag(value: boolean) {
    this._flag = value;
  }

  public toggle() {
    this.flag = !this.flag;
  }
}
