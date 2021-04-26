import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as todo from '../../models/whattodo.interface';

@Component({
  selector: 'app-what-todo',
  templateUrl: './what-todo.component.html',
  styleUrls: ['./what-todo.component.css']
})
export class WhatTodoComponent implements OnInit{
  @Input() item: todo.IWhatTodo;
  @Input() index: number;
  @Output() delete = new EventEmitter<todo.IWhatTodo>();
  // @Output() delete = new EventEmitter<todo.IWhatTodo>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(index) {
    this.delete.emit(index);
  }

}
