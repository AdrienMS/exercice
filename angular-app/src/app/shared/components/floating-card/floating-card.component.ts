import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.sass']
})
export class FloatingCardComponent implements OnInit {
  public isShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  public open() {
    this.isShow = true;
  }

  public close($event: Event) {
    if ($event != null) { $event.stopPropagation(); }
    this.isShow = false;
  }

}
