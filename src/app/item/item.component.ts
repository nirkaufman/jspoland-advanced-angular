import {Component, Input} from '@angular/core';

@Component({
  selector: 'aa-item',
  template: `
    <li>{{ item.title }}</li>
  `,
  styles  : []
})
export class ItemComponent {

  @Input() item;


}
