import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';

import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../../core';
import { ArrayComponent, ButtonComponent, DateComponent, InputComponent, SelectComponent } from '../../components';

const componentMapper = {
  input: InputComponent,
  array: ArrayComponent,
  button: ButtonComponent,
  date: DateComponent,
  select: SelectComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  private componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type] !== undefined ? componentMapper[this.field.type] : componentMapper.input
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
    if (this.field.size !== undefined && this.field.size !== null) {
      this.componentRef.location.nativeElement.className = this.field.size;
    } else {
      this.componentRef.location.nativeElement.className = 'col-3';
    }
  }

}
