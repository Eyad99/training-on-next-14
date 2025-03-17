'use client';
import React, { useReducer, useState } from 'react';

interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

type Action = { type: 'ADD_TODO'; payload: string } | { type: 'TOGGLE_TODO'; payload: number } | { type: 'REMOVE_TODO'; payload: number };

interface State {
	todos: Todo[];
}

const initialState: State = {
	todos: [],
};

const todoReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'ADD_TODO':
			const newTodo: Todo = {
				id: Date.now(),
				text: action.payload,
				completed: false,
			};
			return { todos: [...state.todos, newTodo] };
		case 'TOGGLE_TODO':
			return {
				todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)),
			};
		case 'REMOVE_TODO':
			return {
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		default:
			return state;
	}
};

const TodoApp: React.FC = () => {
	const [state, dispatch] = useReducer(todoReducer, initialState);
	const [input, setInput] = useState<string>('');

	const handleAddTodo = () => {
		if (input.trim()) {
			dispatch({ type: 'ADD_TODO', payload: input });
			setInput(''); // Clear input after adding
		}
	};

	const handleToggleTodo = (id: number) => {
		dispatch({ type: 'TOGGLE_TODO', payload: id });
	};

	const handleRemoveTodo = (id: number) => {
		dispatch({ type: 'REMOVE_TODO', payload: id });
	};

	return (
		<div className='todo-app'>
			<h1>Todo App with useReducer</h1>
			<input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add a new todo' />
			<button onClick={handleAddTodo}>Add Todo</button>

			<ul>
				{state.todos.map((todo) => (
					<li key={todo.id}>
						<span
							onClick={() => handleToggleTodo(todo.id)}
							style={{
								textDecoration: todo.completed ? 'line-through' : 'none',
								cursor: 'pointer',
							}}
						>
							{todo.text}
						</span>
						<button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoApp;
