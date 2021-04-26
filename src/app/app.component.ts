import { Component } from '@angular/core';
import * as todo from './models/whattodo.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoList: todo.IWhatTodo[] = [];
  show = true;
  button: string = "Hide";

  toDo(newData: todo.IWhatTodo) {
    this.toDoList.push(newData);
  }

  deleteItem(value: number) {
    // this.toDoList.splice(value,1);
    this.toDoList = this.toDoList.filter((element,index) => this.toDoList[index] != this.toDoList[value]);
  }

  toggle() {
    if (this.show) {
      this.button = "Add Task";
      this.show = false;
    }
    else {
      this.button = "Hide";
      this.show = true;
    }
  }

}
