import * as requester from './requester';

const BASE_URL = 'https://my-todo-vol8.onrender.com/api/todos';

export const getAllTodos = async () => {
    const result = await requester.get(BASE_URL);
    return result;
}

export const createTodo = async (data) => {
    const result = await requester.post(BASE_URL,data);
    return result;
}

export const markAsDone = async (id) =>{
    const result = await requester.patch(BASE_URL+"/"+id);
    return result;
}

export const deleteTodo = async (id) =>{
    const result = await requester.del(BASE_URL+"/"+id);
    return result;
}

export const getTodoById = async (id) =>{
    const result = await requester.get(BASE_URL+'/'+id);
    return result;
}

export const editTodoById = async (id,data)=>{
    const result = await requester.put(BASE_URL+'/'+id,data);
    return result;
}