import { useEffect, useState } from 'react';
import { TODOS_URL } from '../constants/index';
import { useNavigate } from 'react-router-dom';

export const useRequestGetTodo = (id, setIsLoading) => {
	const [loadedTodo, setLoadedTodo] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const requestGetTodo = async () => {
			try {
				const request = await fetch(`${TODOS_URL}/${id}`);
				if (!request.ok) {
					throw new Error('Не удалось загрузить задачу');
				}
				const loadedData = await request.json();
				setLoadedTodo(loadedData);
			} catch (error) {
				console.error(error);
				navigate('/loading-error-page', { replace: true });
			} finally {
				setIsLoading(false);
			}
		};
		requestGetTodo();
	}, []);
	return loadedTodo;
};
