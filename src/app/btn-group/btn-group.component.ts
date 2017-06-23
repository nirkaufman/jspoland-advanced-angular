import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'aa-btn-group',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => BtnGroupComponent ),
      multi: true
    }
  ],
  template: `
    <div class="btn-group"
         role="group"
         aria-label="...">
      <button type="button"
              [disabled]="isDisable"
              (click)="setDirection('left')"
              class="btn btn-default">Left
      </button>
      <button type="button"
              [disabled]="isDisable"
              (click)="setDirection('Middle')"
              class="btn btn-default">Middle
      </button>
      <button type="button"
              [disabled]="isDisable"
              (click)="setDirection('right')"
              class="btn btn-default">Right
      </button>
    </div>
  `,
  styles  : []
})
export class BtnGroupComponent implements ControlValueAccessor {

  public directionValue: string;
  public isDisable: boolean;
  private changeFn = (_) => _;

  setDirection(value) {
    this.directionValue = value;
    this.changeFn(value);
  }

  writeValue(value: string): void {
    this.directionValue = value;
  }

  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }


}
