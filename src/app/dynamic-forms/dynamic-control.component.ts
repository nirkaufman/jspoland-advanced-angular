import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'aa-dynamic-control',
  template: `
    <div class="form-group"
         [formGroup]="group">
      <label>{{ config.label }}</label>
      <input class="form-control"
             [formControlName]="config.name"
             [placeholder]="config.placeholder"
             [type]="config.type">
    </div>
  `,
})
export class DynamicControlComponent {
  public group: FormGroup;
  public config;
}
