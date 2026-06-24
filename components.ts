// anatomy of a component
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Hello Universe `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
})
export class App {}

//Hello Universe


// update a component
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Hello {{ city }}, {{ 1 + 1 }} `,
})
export class App {
  city = 'San Francisco';
}

//Hello San Francisco, 2


//composing components
import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [User],
})
export class App {}

//Username: youngTech


//controlling flow in components @if
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
    }
  `,
})
export class App {
  isServerRunning = true;
}

//Yes, the server is running


//controlling flow in components @for
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }
  `,
})
export class App {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}

//Sarah
//Amy
//Rachel
//Jessica
//Poornima


//component input properties
import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class User {
  readonly name = input<string>();
}

//The user's name is Simran


//component output properties
import {Component, output} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
})
export class Child {
  readonly addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

//Add Item (button clicked) emits an event with the value '🐢'
//🐢 all the way down 0