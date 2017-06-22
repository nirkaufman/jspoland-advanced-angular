import {Component, NgZone, ChangeDetectorRef} from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'aa-root',
  template: `
    <aa-list-header [title]="title"></aa-list-header>

    <aa-todolist [list]="list.items"
                 (item)="list.addItem($event)"></aa-todolist>
  `,
})
export class AppComponent {

  public title = "angular";

  constructor(public list: ListService, private zone: NgZone, cd: ChangeDetectorRef) {
    zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.title = 'title';
        cd.detectChanges();
      }, 2000)

    })




  }

}
