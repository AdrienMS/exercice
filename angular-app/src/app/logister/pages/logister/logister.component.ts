import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LoadingOverlayComponent } from '../../../shared';

@Component({
  selector: 'app-logister',
  templateUrl: './logister.component.html',
  styleUrls: ['./logister.component.sass']
})
export class LogisterComponent implements OnInit {
  public isToggle = false;
  public message: string = null;

  private componentRef: any;

  constructor(
    private route: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) { }

  ngOnInit(): void {
    this.checkRoute();
  }

  public toggleCard() {
    this.message = null;
    this.isToggle = !this.isToggle;
  }

  private checkRoute() {
    this.message = null;
    this.route.params.subscribe(params => {
      if (params.type !== undefined && params.type === 'register') {
        this.isToggle = true;
      } else {
        this.isToggle = false;
      }
    });
  }

  public loading($event) {
    if ($event) {
      const factory = this.resolver.resolveComponentFactory(LoadingOverlayComponent);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.isLoading = true;
    } else {
      this.container.clear();
    }
  }

  public onError($event) {
    this.message = $event;
  }

}
