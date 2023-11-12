import * as requester from './requester';

const BASE_URL = 'http://localhost:5000/api/todos';

export const getAllTodos = async () => {
    const result = await requester.get(BASE_URL);
    return result;
}
