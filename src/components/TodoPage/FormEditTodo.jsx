import './TodoPage.css';
import { useEffect, useState } from 'react';
import { useRequestEditTodo } from '../../hooks/index';

export const FormEditTodo = ({
	loadedTodo,
	id,
	isLoadingButtons,
	setIsLoadingButtons,
	setRefreshTodosFlag,
}) => {
	const [textArea, setTextArea] = useState('');

	const requestEditTodo = useRequestEditTodo(
		id,
		setIsLoadingButtons,
		setRefreshTodosFlag,
	);

	useEffect(() => setTextArea(loadedTodo ? loadedTodo.title : ''), [loadedTodo]); // Нужен что бы обновлять textArea так как его значение тянется из запроса на уровень выше

	const onChangeTextArea = ({ target }) => {
		if (loadedTodo) {
			setTextArea(target.value);
		}
	};

	const handleSabmit = (e) => {
		e.preventDefault();
		requestEditTodo(textArea);
	};

	return (
		<form className="todo-page-form" onSubmit={handleSabmit}>
			<textarea
				name="textArea"
				rows="10"
				value={textArea}
				onChange={onChangeTextArea}
			/>
			{isLoadingButtons ? (
				<span className="loader loader-edit-button" />
			) : (
				<button
					className="todo-page-confirm-btn"
					type="submit"
					disabled={
						textArea === '' || (loadedTodo && loadedTodo.title === textArea)
					}
				>
					Применить
				</button>
			)}
		</form>
	);
};
