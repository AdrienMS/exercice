import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  LogisterComponent,
  LogoutComponent,
} from './pages';

// import { AuthGuardService } from '../core';

const routes: Routes = [
  { path: 'logister/:type', component: LogisterComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisterRoutingModule {}
