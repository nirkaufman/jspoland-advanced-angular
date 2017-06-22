import {Component, Input, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'aa-list-header',
  template: `
    <h1 (click)="stop()">{{ title }}</h1>
  `,
  styles  : []
})
export class ListHeaderComponent {
  @Input() title: string;

  constructor(private cd: ChangeDetectorRef) {
  }

  stop() {
    this.cd.detach();
  }
}
