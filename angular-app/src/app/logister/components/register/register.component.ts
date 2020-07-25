import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FieldConfig/*, AuthService*/ } from '../../../core';
import { DynamicFormComponent } from '../../../shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isError: EventEmitter<string> = new EventEmitter<string>();
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  public formConfig: Array<FieldConfig> = [];

  constructor(/*private authService: AuthService, */private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formConfig = [
      {
        type: 'input',
        label: 'Nom',
        name: 'name',
        inputType: 'text',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Nom requis',
          },
        ],
        size: 'col-12',
      },
      {
        type: 'input',
        label: 'Adresse mail',
        name: 'email',
        inputType: 'email',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Adresse mail requise',
          },
          {
            name: 'correct email',
            validator: Validators.email,
            message: 'Votre adresse mail n\'est pas valide',
          },
        ],
        size: 'col-12',
      },
      {
        type: 'input',
        label: 'Confirmer l\'adresse mail',
        name: 'confirmEmail',
        inputType: 'email',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Adresse mail requise',
          },
          {
            name: 'correct email',
            validator: Validators.email,
            message: 'Votre adresse mail n\'est pas valide',
          },
        ],
        size: 'col-12',
      },
      {
        type: 'input',
        label: 'Mot de passe',
        name: 'password',
        inputType: 'password',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Mot de passe requis',
          },
        ],
        size: 'col-12',
      },
      {
        type: 'input',
        label: 'Confirmer le mot de passe',
        name: 'confirmPassword',
        inputType: 'password',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Mot de passe requis',
          },
        ],
        size: 'col-12',
      },
      {
        type: 'button',
        label: 'Valider',
        size: 'col-12',
      },
    ];
  }

  public submit(value: { email: string, password: string, name: string, confirmEmail: string, confirmPassword: string }) {
    this.isLoading.emit(true);
    if (value.email !== value.confirmEmail || value.password !== value.confirmPassword) {
      console.log('error');
      return;
    }
    this.isError.emit('Non implémenté');
    this.isLoading.emit(false);
    // this.authService.signUpUser(value.name, value.email, value.password).then(
    //   () => {
    //     this.router.navigate(['/events']);
    //     this.isLoading.emit(false);
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.isLoading.emit(false);
    //   }
    // );
  }

  public callToggle() {
    this.toggle.emit();
  }

}
