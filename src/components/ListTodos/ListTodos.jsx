import './ListTodos.css';
import { Todo } from './Todo.jsx';

export const ListTodos = ({ listTodos, setRefreshTodosFlag }) => {
	return (
		<ul className="ul-list-todos">
			{listTodos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					setRefreshTodosFlag={setRefreshTodosFlag}
				/>
			))}
		</ul>
	);
};
