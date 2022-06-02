import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Register fone', url: '/cliente', icon: 'call' },
    // { title: 'Produtos', url: '/produto', icon: 'heart' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
