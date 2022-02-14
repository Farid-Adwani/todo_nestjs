import { OmitType } from "@nestjs/mapped-types";
import { TodoDto } from "./TodoDto";


export class AddTodoDto extends OmitType(TodoDto,['status']){}