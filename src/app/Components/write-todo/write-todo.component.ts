import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as todo from '../../models/whattodo.interface'

@Component({
  selector: 'app-write-todo',
  templateUrl: './write-todo.component.html',
  styleUrls: ['./write-todo.component.css']
})
export class WriteTodoComponent implements OnInit {
  @Output() todoEvent = new EventEmitter<todo.IWhatTodo>();

  constructor() { }

  ngOnInit(): void {
  }

  addToDo(titleInput: string, detailInput: string) {
    let data = {title: titleInput, detail: detailInput}
    this.todoEvent.emit(data);
  }
}
