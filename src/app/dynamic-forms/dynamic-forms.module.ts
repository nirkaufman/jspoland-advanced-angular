import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicControlComponent} from './dynamic-control.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';


@NgModule({
  imports: [
    CommonModule,
      ReactiveFormsModule
  ],
  declarations: [DynamicControlComponent, DynamicFormComponent],
  entryComponents: [DynamicControlComponent],
  exports: [DynamicControlComponent]
})
export class DynamicFormsModule { }
