import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  userForm = new FormGroup({
    projectEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),

    projectName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]),
    phnumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[6789][0-9]{9}$'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
  });
  // ((\\+91-?)|0)?[0-9]{10}$

  get proEmail() {
    return this.userForm.get('projectEmail');
  }
  get proName() {
    return this.userForm.get('projectName');
  }
  get proPhone() {
    return this.userForm.get('phnumber');
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
