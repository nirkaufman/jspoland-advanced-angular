import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ListService} from '../list.service';

@Component({
  selector : 'aa-todolist',
  providers: [ListService],
  template : `
    <input type="text"
           (keydown.enter)="item.emit($event.target.value)">
    <ul>
      <aa-item *ngFor="let item of list"
               [item]="item"></aa-item>
    </ul>
  `,
  styles   : []
})
export class TodolistComponent {
  @Input() list: any[];
  @Output() item = new EventEmitter<any>();
}
