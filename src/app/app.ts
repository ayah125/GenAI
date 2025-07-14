import { Component } from '@angular/core';
import { TaskSuggestComponent } from '../components/task-suggestion/task-suggestion';

@Component({
  selector: 'app-root',
  imports: [TaskSuggestComponent],

  template: `<app-task-suggest></app-task-suggest>`,
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-first-app';
}
