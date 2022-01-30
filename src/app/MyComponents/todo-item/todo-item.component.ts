import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Input() i:Number;
  @Output() todoDelete : EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckbox : EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo : Todo){
    console.log("Delete click is triggerde!!!");
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
  }

}
