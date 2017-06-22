import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {ListService} from '../list.service';

@Component({
  selector       : 'aa-todolist',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers      : [ListService],
  template       : `
    <input type="text"
           (keydown.enter)="item.emit($event.target.value)">
    <input type="checkbox"
           (change)="flag = $event.target.checked">show completed

    <aa-list [items]="list | filter:'completed':flag"></aa-list>
  `,
  styles         : []
})
export class TodolistComponent {
  flag = false;

  @Input() list: any[];
  @Output() item = new EventEmitter<any>();


}
