import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher} from "@angular/material";
import { FormControl, FormGroupDirective,
         NgForm, Validators} from "@angular/forms";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  options: string[] = ['Newbie', 'Proficient', 'Experience', 'Expert'];
  panelOpenState = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor() {
  }

  ngOnInit() {
  }

}
