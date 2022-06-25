import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FormBuilder } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  formSubmittedSuccessfully = false;
  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder
  ) {}

  CountryISO = CountryISO;

  userForm = this.formBuilder.group({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  userName: string;
  userEmail: string;
  userMessage: string;
  userPhone: any;

  isNameInValid = false;
  isEmailValid = false;
  isMessageValid = false;
  isPhoneValid = false;

  isSubmit = false;

  resposnseMessage: string;

  ngOnInit(): void {
    this.isScrollAnimation();
  }
  isScrollAnimation() {
    ScrollTrigger.create({
      trigger: '.contact-header-h1',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });
    ScrollTrigger.create({
      trigger: '.contact-header-image',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });
  }

  validateForm() {
    if (this.userName == undefined || this.userName == '') {
      this.isNameInValid = true;
    } else {
      this.isNameInValid = false;
    }
  }

  validateEmail() {
    if (this.userEmail == undefined || this.userEmail == '') {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
  }

  validateMessage() {
    if (this.userMessage == undefined || this.userMessage == '') {
      this.isMessageValid = true;
    } else {
      this.isMessageValid = false;
    }
  }

  validatePhone() {
    if (this.userPhone == undefined || this.userPhone == '') {
      this.isPhoneValid = true;
    } else {
      this.isPhoneValid = false;
    }
  }

  onSubmit() {
    this.validateForm();
    this.validateEmail();
    this.validateMessage();
    this.validatePhone();

    if (
      (this.isMessageValid ||
        this.isEmailValid ||
        this.isNameInValid ||
        this.isPhoneValid) !== true
    ) {
      this.contactService
        .postUserData(this.userForm.value)
        .subscribe((data) => {
          this.resposnseMessage = data.message;
          if (this.resposnseMessage == 'success') {
            this.formSubmittedSuccessfully = true;
            setTimeout(() => {
              this.formSubmittedSuccessfully = false;
            }, 2000);
          }
        });
      this.userForm.reset();
    }
  }
  // }
}
