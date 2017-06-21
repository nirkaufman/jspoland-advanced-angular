import {Component} from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'aa-root',
  template: `
    <aa-todolist [list]="list.items"
                 (item)="list.addItem($event)"></aa-todolist>
  `,
})
export class AppComponent {
  constructor(public list: ListService) {

  }
}
