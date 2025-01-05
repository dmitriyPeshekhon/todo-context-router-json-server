import './ModalWindow.css';
import closePng from '../../assets/close.png';
import { useState } from 'react';
import { FormAddTodo } from './FormAddTodo';

export const ModalWindowAddTodo = ({
	isModalOpen,
	setIsModalOpen,
	requestAddTodo,
	setRefreshTodosFlag,
}) => {
	const [isLoadingAddTodo, setIsLoadingAddTodo] = useState(false); // для лоадера в FormAddRedTodo и так же что бы нельзя было закрыть модалку пока идет запрос

	const handleCloseModalWindow = ({ target }) => {
		if (
			!isLoadingAddTodo &&
			(target.className.includes('modal-overlay') ||
				target.closest('.img-container-btn'))
		) {
			setIsModalOpen(false);
		}
	};

	return isModalOpen ? (
		<div className="modal-overlay" onClick={handleCloseModalWindow}>
			<div className="modal-window">
				<div className="img-container-btn" onClick={handleCloseModalWindow}>
					<img className="img-btn" src={closePng} alt="delete" />
				</div>
				<FormAddTodo
					setIsModalOpen={setIsModalOpen}
					requestAddTodo={requestAddTodo}
					isLoadingAddTodo={isLoadingAddTodo}
					setIsLoadingAddTodo={setIsLoadingAddTodo}
					setRefreshTodosFlag={setRefreshTodosFlag}
				/>
			</div>
		</div>
	) : null;
};
