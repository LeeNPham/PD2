const API_URL = 'http://localhost:5000';

export const getTodos = async () => {
    const response = await fetch(`${API_URL}/todos`);
    return response.json();
};

export const addTodo = async (todo) => {
    const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
    });
    return response.json();
};

export const updateTodo = async (id, todo) => {
    const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
    });
    return response.json();
};

export const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};
