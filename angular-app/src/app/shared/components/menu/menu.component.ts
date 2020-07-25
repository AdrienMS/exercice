import { Component, OnInit, OnDestroy } from '@angular/core';

import { faLaugh } from '@fortawesome/free-regular-svg-icons';

import { User, UserService} from '../../../core';

// import * as firebase from 'firebase';
import { Observable, Subject, Observer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit, OnDestroy {
  faLaugh = faLaugh;

  public isAuth = false;
  public isToggle = false;

  public user$: Observable<User>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('currentUser');
    if (token !== null) {
      this.isAuth = true;
      this.user$ = this.userService.getCurrentUser(token, user);
    }
  }

  public getUser(email: string) {
    // this.user$ = this.userService.getUserFromMail(email).pipe(takeUntil(this.unsubscribe$));
  }

  public toggleMenu() {
    this.isToggle = !this.isToggle;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
