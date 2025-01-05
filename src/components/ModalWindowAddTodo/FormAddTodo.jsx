import './ModalWindow.css';
import { useState } from 'react';
import { useRequestAddTodo } from '../../hooks/index';

export const FormAddTodo = ({
	setIsModalOpen,
	isLoadingAddTodo,
	setIsLoadingAddTodo,
	setRefreshTodosFlag,
}) => {
	const [textArea, setTextArea] = useState('');

	const requestAddTodo = useRequestAddTodo(setRefreshTodosFlag, setIsLoadingAddTodo);

	const handleTextareaChange = ({ target }) => {
		setTextArea(target.value);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		await requestAddTodo(textArea);
		setIsModalOpen(false);
	};

	return (
		<form className="form-add-todo" onSubmit={handleFormSubmit}>
			<textarea
				name="titleTodo"
				className="textarea-add-todo"
				rows="3"
				placeholder="Введите вашу задачу..."
				value={textArea}
				onChange={handleTextareaChange}
			></textarea>
			{isLoadingAddTodo ? (
				<span className="loader loader-add-todo"></span>
			) : (
				<button
					className="btn-modal-window"
					type="submit"
					disabled={textArea === ''}
				>
					Добавить
				</button>
			)}
		</form>
	);
};
