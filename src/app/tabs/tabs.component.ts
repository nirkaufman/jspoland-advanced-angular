import {Component, ContentChildren, AfterContentInit} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'aa-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabs">
        <a (click)="activateTab(tab)">{{ tab.label }}</a>
      </li>
    </ul>

    <ng-content></ng-content>
  `,
  styles  : []
})
export class TabsComponent  {

  @ContentChildren(TabComponent) tabs;

  activateTab(tab: TabComponent) {
    this.tabs.forEach(stab => stab.active = false);
    tab.active = true;
  }
}
