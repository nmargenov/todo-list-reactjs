import * as requester from './requester';

const BASE_URL = 'http://localhost:5000/api/todos';

export const getAllTodos = async () => {
    const result = await requester.get(BASE_URL);
    return result;
}

export const createTodo = async (data) => {
    const result = await requester.post(BASE_URL,data);
    return result;
}