import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'aa-dynamic',
  styles  : [`
    div {border-color: red; background-color: yellow}
  `],
  template: `
    <div>{{text}}</div>
  `,

})
export class DynamicComponent {
  public text: string;
}
