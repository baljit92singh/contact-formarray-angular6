import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formarray';
  contactNumbers = ['home','work','other'];
  numberType = new FormControl;
  basicDetailsForm: FormGroup;
  constructor(public formBuilder: FormBuilder){
    this.basicDetailsForm = this.formBuilder.group({
      contacts: this.formBuilder.array([this.initContacts(),]),
    });
  }
  initContacts() {
    return this.formBuilder.group({
      contactNumber: ['', Validators.required],
      numberType: ['Mobile'],
    });
  }
  addContacts() {
    const control = <FormArray>this.basicDetailsForm.controls['contacts'];
    control.push(this.initContacts());
  }
  deleteContacts(i: number) {
    const control = <FormArray>this.basicDetailsForm.controls['contacts'];
    control.removeAt(i);
  }
  keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit(){

  }
}
