import { Body, Controller, Delete, Get, Param, Patch, Put } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import { Todo } from './model/todo.model';
import { TodoDto } from './dto/TodoDto';
import { AddTodoDto } from './dto/addTodoDto';


@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  todos: Todo[] = [new Todo(0, 'todo1', '1'), new Todo(1, 'todo2', '2'), new Todo(2, 'todo3', '3')]
  @Get()
  getTodos(): Todo[] {
    return this.todos;

  }
  @Get(':id')
  getTodoById(@Param() params): Todo | string {
    return this.todoService.findOne(params.id)

  }

  @Delete(':id')
  deleteById(@Param() params): Todo | string {
    const todo = this.todoService.deleteOne(params.id)
    if (todo)
      return todo
    else
      return 'not found'
  }

  @Patch(':id')
  updateTodoPatch(@Param() params, @Body() updatedTodo: TodoDto): Todo {
    return this.todoService.update(params.id, updatedTodo)
  }

  @Put(':id')
  updateTodoPut(@Param() params, @Body() updatedTodo: TodoDto): Todo {
    return this.todoService.update(params.id, updatedTodo)
  }

}
