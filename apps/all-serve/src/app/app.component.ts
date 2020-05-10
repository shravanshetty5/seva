import { Component } from '@angular/core';

interface IService {
  title: string;
  decription?: string;
}
@Component({
  selector: 'seva-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seva';
}
