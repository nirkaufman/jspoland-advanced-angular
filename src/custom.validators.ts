import {AbstractControl} from '@angular/forms';

export class CustomValidators {

  static  isNir(control: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => resolve(null), 3000);
    })
  }
}
