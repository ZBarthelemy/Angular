import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher} from "@angular/material";
import { FormControl, FormGroupDirective,
         NgForm, Validators} from "@angular/forms";
import * as i18nIsoCountries from 'i18n-iso-countries';

declare const require;

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
  sameAsShipping = false;
  supportedCountries: string[] = [];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  countryFormControl = new FormControl();

  matcher = new MyErrorStateMatcher();
  constructor() {
    i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/en.json"));
    i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/zh.json"));
    i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/ja.json"));
    this.supportedCountries.push(i18nIsoCountries.getName('US', 'en'));
    this.supportedCountries.push(i18nIsoCountries.getName('HK', 'zh'));
    this.supportedCountries.push(i18nIsoCountries.getName('JP', 'ja'));
  }

  ngOnInit() {
  }

}
