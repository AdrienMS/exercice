import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.sass']
})
export class LoadingOverlayComponent implements OnInit {
    @Input() isLoading: boolean;

    constructor() { }

    ngOnInit(): void {
    }

}
