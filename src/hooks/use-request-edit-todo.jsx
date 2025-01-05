import { DELETE_TODO_URL } from '../constants/index';
import { useNavigate } from 'react-router-dom';

export const useRequestEditTodo = (id, setIsLoading, setRefreshTodosFlag) => {
	const navigate = useNavigate();

	async function requestEditTodo(param) {
		setIsLoading(true);

		const checkedParam = typeof param === 'boolean';
		const objWithRequest = checkedParam ? { completed: param } : { title: param };

		try {
			const response = await fetch(DELETE_TODO_URL + id, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify(objWithRequest),
			});
			if (!response.ok) {
				throw new Error('Не удалось редактировать задачу');
			}

			setRefreshTodosFlag((prev) => !prev);
		} catch (error) {
			console.error(error);
			navigate('/action-failed-page', { replace: true });
		} finally {
			setIsLoading(false);
			if (!checkedParam) {
				navigate('/', { replace: true });
			}
		}
	}
	return requestEditTodo;
};
