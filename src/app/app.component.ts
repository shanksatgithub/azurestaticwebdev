import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello, we have a {{value}}</div>`,
})
export class AppComponent {
  value = 'Virus Free World';
}
