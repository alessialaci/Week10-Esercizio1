import { Todo } from './../models/todo';

export async function getTodos(): Promise<Todo[]> {
    return await (await fetch('assets/todo.json')).json();
}
