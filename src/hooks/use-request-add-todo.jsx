import { TODOS_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

export const useRequestAddTodo = (setRefreshTodosFlag, setIsLoading) => {
	const navigate = useNavigate();

	const requestAddTodo = async (titleTodo) => {
		setIsLoading(true);

		try {
			const response = await fetch(TODOS_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: titleTodo,
					completed: false,
				}),
			});
			if (!response.ok) {
				throw new Error('Не удалось добавить задачу в базу');
			}

			setRefreshTodosFlag((prev) => !prev);
		} catch (error) {
			console.error(error);
			navigate('/action-failed-page', { replace: true });
		} finally {
			setIsLoading(false);
			navigate('/', { replace: true });
		}
	};

	return requestAddTodo;
};
