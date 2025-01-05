import { useNavigate } from 'react-router-dom';
import { DELETE_TODO_URL } from '../constants/index.js';

export const useRequestDeleteTodo = (id, setIsLoading, setRefreshTodosFlag) => {
	const navigate = useNavigate();
	async function requestDeleteTodo() {
		setIsLoading(true);

		try {
			const response = await fetch(DELETE_TODO_URL + id, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error('Не удалось удалить задачу из базы данных');
			}

			setRefreshTodosFlag((prev) => !prev);
		} catch (error) {
			console.error(error);
			navigate('/action-failed-page', { replace: true });
		} finally {
			setIsLoading(false);
			navigate('/', { replace: true });
		}
	}
	return requestDeleteTodo;
};
