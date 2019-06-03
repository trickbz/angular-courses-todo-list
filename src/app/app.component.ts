import { Component } from '@angular/core';

import ITodoItem from './interfaces/ITodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODO LIST';

  public items: Array<ITodoItem> = [
    { title: 'Title 1', completed: false },
    { title: 'Title 2', completed: true }
  ];

  protected onKeyDown(e: KeyboardEvent): void {
    if (e.code === 'Enter') {
      const input = (e.target as HTMLInputElement);
      const value = input.value.trim();
      if (value) {
        console.log('Enter pressed');
        this.items.push({
          title: value,
          completed: false
        });
        input.value = '';
      }
    }
  }
}
