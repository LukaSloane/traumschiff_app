import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/model/todos';
import { TodosService } from 'src/app/services/todos/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})

export class TodoPage implements OnInit {


  todoLoad: Todos[] = [];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.todoService.loadTodos().then((todos: Todos[]) => {
      this.todoLoad = todos;
    // }, error => {
    //   this.todoLoad = [];
    // }
    }
    );
  }

}
