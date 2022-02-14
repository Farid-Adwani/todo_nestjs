import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './model/todo.model';
import { TodoDto } from './dto/TodoDto';
import { AddTodoDto } from './dto/addTodoDto';


@Injectable()
export class TodoService {

    public static  todos: Todo[] = [new Todo(0, 'todo1', '1'), new Todo(1, 'todo2', '2'), new Todo(2, 'todo3', '3')]



    findOne(id: number) {
        let to: Todo
        TodoService.todos.forEach((todo: Todo) => {
            if (todo.id.toString() === id.toString()) {
                to = todo
            }
        })
        if(!to){ throw new NotFoundException("ID NOT FOUND")}
        return to
    }

    deleteOne(id: number) {
        let to: Todo
        TodoService.todos.forEach((todo: Todo) => {
            if (todo.id.toString() === id.toString()) {

                TodoService.todos.splice(TodoService.todos.indexOf(todo),1);
                console.log(TodoService.todos);
                to = todo
            }
        })
        if(!to){ throw new NotFoundException("ID NOT FOUND")}
        return to
    }

    update(id :number,updatedTodo: TodoDto) {
        let t 
        console.log(updatedTodo)
        TodoService.todos.forEach(todo => {
            if (todo.id.toString() === id.toString()){
                TodoService.todos.splice(TodoService.todos.indexOf(todo))
                if(updatedTodo.name!=""){
                    todo.name = updatedTodo.name

                }
                if(updatedTodo.description!=""){
                    todo.description = updatedTodo.description

                }
                if(updatedTodo.status!=null){
                    todo.status = updatedTodo.status
                }
                TodoService.todos.push(todo)
                t =todo
            }
        })
        if(!t){ throw new NotFoundException("ID NOT FOUND")}
        return t
    }
}


