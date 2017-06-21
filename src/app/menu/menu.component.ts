import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'aa-menu',
  template: ``
})
export class MenuComponent  {

  @Input()
  private menuItems: string[];

  get items() {
    return this.menuItems
  }
}
