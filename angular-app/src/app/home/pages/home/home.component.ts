import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { User, UserService } from '../../../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  public users$: Observable<User[]>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      this.users$ = this.userService.getUsers(token);
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
