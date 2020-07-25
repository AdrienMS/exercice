import { Component, OnInit, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { FieldConfig, UserService, User } from '../../../core';
import { DynamicFormComponent } from '../../../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isError: EventEmitter<string> = new EventEmitter<string>();
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  public formConfig: Array<FieldConfig> = [];
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formConfig = [
      {
        type: 'input',
        label: 'Pseudo',
        name: 'username',
        inputType: 'text',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Pseudo requis',
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
        type: 'button',
        label: 'Valider',
        size: 'col-12',
      },
    ];
  }

  public submit(value: { username: string, password: string }) {
    this.isLoading.emit(true);
    this.userService.login({username: value.username, password: value.password}).subscribe(
      () => { this.isLoading.emit(false); this.router.navigate(['/']); },
      () => { this.isLoading.emit(false); this.isError.emit('Utilisateur inconnu'); }
    );
  }

  public callToggle() {
    this.toggle.emit();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
