import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aa-child',
  template: `
    <h1>Hello child</h1>
  `,
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
