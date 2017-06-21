import {Component, ViewChildren, QueryList} from '@angular/core';
import {SidebarComponent} from './sidebar.component';

@Component({
  selector: 'aa-root',
  template: `
    <aa-tabs>

      <aa-tab label="first">
        <h2>first tab</h2>
      </aa-tab>

      <aa-tab label="second">
        <h2>second tab</h2>
      </aa-tab>

      <aa-tab label="third">
        <h2>Hello im a tab!</h2>
      </aa-tab>

    </aa-tabs>

  `,
  styles  : []
})
export class AppComponent {

  @ViewChildren(SidebarComponent)
  private sidebars: QueryList<SidebarComponent>;

  toggle() {
    this.sidebars.forEach(bar => bar.toggle());
  }

}
