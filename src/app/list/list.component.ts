import {Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'aa-list',
  template: `
    <ul>
      <aa-item *ngFor="let item of items"
               [item]="item"></aa-item>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnChanges {

  @Input() items;

  public itemList;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.itemList = changes.items.currentValue;
  }
}
