import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent extends BaseComponent implements OnInit {
  public isTextArea = false;
  public size = 'col-3';

  ngOnInit() {
    if (this.field.inputType === 'textarea') { this.isTextArea = true; }
    if (this.field.size !== undefined && this.field.size !== null) { this.size = this.field.size; }
  }
}
