import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';
import {MatFormField} from '@angular/material/form-field';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;

  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

  get control() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
  }
}
