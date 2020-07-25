import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.sass']
})
export class FabComponent implements OnInit {
  faPlus = faPlus;

  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.action.emit();
  }

}
