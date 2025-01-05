import './ListTodos.css';
import { useState } from 'react';
import { useRequestEditTodo } from '../../hooks';

export const Checkbox = ({ todo, setRefreshTodosFlag }) => {
	const [isLoadingCheckbox, setIsLoadingCheckbox] = useState(false);

	const requestEditTodo = useRequestEditTodo(
		todo.id,
		setIsLoadingCheckbox,
		setRefreshTodosFlag,
	);

	return (
		<div className="container-checkbox">
			{isLoadingCheckbox ? (
				<span className="loader loader-check-box"></span>
			) : (
				<input
					className="toggle-todo"
					type="checkbox"
					checked={todo.completed}
					onChange={() => requestEditTodo(!todo.completed)}
				/>
			)}
		</div>
	);
};
