import './ListTodos.css';
import { Checkbox } from '../index';
import { Link } from 'react-router-dom';

export const Todo = ({ todo, setRefreshTodosFlag }) => {
	return (
		<li className="todo-container">
			<Checkbox todo={todo} setRefreshTodosFlag={setRefreshTodosFlag} />
			<Link
				className="link-title-todo"
				style={todo.completed ? { textDecoration: 'line-through' } : {}}
				to={`/todo/${todo.id}`}
			>
				{todo.title}
			</Link>
		</li>
	);
};
