import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent {
  title: string = 'Angular Home Page';
}
