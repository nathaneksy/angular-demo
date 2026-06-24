//routing overview
import {Routes} from '@angular/router';

export const routes: Routes = [];

// Home | User


//define a route
import {Routes} from '@angular/router';

import {Home} from './home/home';
import {User} from './user/user';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
];

//Home | User
//Home Page


//using router link for navigation
import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet, RouterLink],
})
export class App {}

//Home | User
//Home Page