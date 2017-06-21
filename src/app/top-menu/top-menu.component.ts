import {Component} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'aa-top-menu',
  template: `
    <ul>
      <li *ngFor="let item of menuItems">{{ item }}</li>
    </ul>
  `,
  styles  : []
})
export class TopMenuComponent extends MenuComponent {

  constructor() {
    super()
  }


}
