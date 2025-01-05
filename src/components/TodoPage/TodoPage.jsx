import './TodoPage.css';
import deletePng from '../../assets/delete.png';
import back from '../../assets/back.png';
import { useRequestGetTodo, useRequestDeleteTodo } from '../../hooks/index';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { FormEditTodo } from './FormEditTodo';

export const TodoPage = ({ setRefreshTodosFlag }) => {
	const [isLoadingTodo, setIsLoadingTodo] = useState(true);
	const [isLoadingButtons, setIsLoadingButtons] = useState(false);

	const params = useParams();

	const loadedTodo = useRequestGetTodo(params.id, setIsLoadingTodo);
	const requestDeleteTodo = useRequestDeleteTodo(
		params.id,
		setIsLoadingButtons,
		setRefreshTodosFlag,
	);

	const handleClickDelete = () => {
		if (!isLoadingButtons) {
			requestDeleteTodo();
		}
	};

	return isLoadingTodo ? (
		<div className="loader-container">
			<span className="loader" />
		</div>
	) : (
		<div className="container-todo-page">
			<header className="container-back-delete-btn">
				<Link className="img-container-btn" to="/">
					<img className="img-btn" src={back} alt="delete" />
				</Link>
				{isLoadingButtons ? (
					<span className="loader loader-delete-button" />
				) : (
					<div className="img-container-btn" onClick={handleClickDelete}>
						<img className="img-btn" src={deletePng} alt="delete" />
					</div>
				)}
			</header>
			<FormEditTodo
				loadedTodo={loadedTodo}
				id={params.id}
				isLoadingButtons={isLoadingButtons}
				setIsLoadingButtons={setIsLoadingButtons}
				setRefreshTodosFlag={setRefreshTodosFlag}
			/>
		</div>
	);
};
