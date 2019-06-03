import {Component, Input, OnInit} from '@angular/core';
import ITodoItem from '../interfaces/ITodoItem';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.components.scss']
})
export class TodoItemsComponent implements OnInit {
  @Input()
  items: ITodoItem[];

  constructor() { }
  ngOnInit() { }

  toggleCompleted(item: ITodoItem) {
    const foundItem = this.items.find(i => i === item);
    foundItem.completed = !foundItem.completed;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
