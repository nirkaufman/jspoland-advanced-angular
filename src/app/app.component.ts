import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';
import 'rxjs';


@Component({
  selector: 'aa-root',
  styles  : [' input.ng-invalid {background-color: red} '],
  template: `
    <h1>Hello Forms</h1>
    <form [formGroup]="userForm"
          (ngSubmit)="send()">
      
      <aa-btn-group formControlName="direction"></aa-btn-group>

      <!--<input type="text"-->
      <!--formControlName="username"-->
      <!--placeholder="username">-->

      <!--<span *ngIf="username.invalid">Invalid username!</span>-->
      <!--<pre>{{ username.errors | json }}</pre>-->

      <!--<input type="text"-->
      <!--formControlName="email"-->
      <!--placeholder="email">-->

      <!--<input type="checkbox"-->
      <!--formControlName="alive">-->

      <!--<div formArrayName="phones">-->
      <!--<button type="button"-->
      <!--(click)="addPhone()">+-->
      <!--</button>-->
      <!--<input type="number"-->
      <!--*ngFor="let phone of phones.controls; let i=index;"-->
      <!--[formControlName]="i">-->
      <!--</div>-->

      <button type="submit">submit</button>
    </form>


  `,
})
export class AppComponent implements OnInit {

  public userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      direction: {
        value:'right',
        disabled: true
      },
      username : [{
        value   : '',
        disabled: false
      }],
      email    : null,
      alive    : false,
      phones   : fb.array([
        fb.control(null)
      ]),
    });
  }

  ngOnInit(): void {
    this.alive.valueChanges.subscribe(value => this.applyRules(value));

    this.username.statusChanges
        .debounceTime(100)
        .subscribe(status => {
          if (status === 'PENDING') {
            this.username.disable();
          } else {
            this.username.enable();
          }
          console.log(status)
        });
  }

  get alive(): FormControl {
    return this.userForm.get('alive') as FormControl;
  }

  get phones(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

  get username(): FormControl {
    return this.userForm.get('username') as FormControl;
  }

  addPhone() {
    this.phones.push(new FormControl());
  }

  send() {
    console.log(this.userForm.value);
    this.userForm.updateValueAndValidity();
  }


  private applyRules(flag) {
    if (flag) {
      this.username.setValidators(Validators.required)
    } else {
      this.username.setValidators([]);
    }
  }
}
