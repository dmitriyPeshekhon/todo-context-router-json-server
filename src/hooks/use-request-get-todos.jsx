import { useState, useEffect } from 'react';
import { TODOS_URL } from '../constants/index';
import { useNavigate } from 'react-router-dom';

export const useRequestGetTodos = (setIsLoading, refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const requestGetTodos = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(TODOS_URL);
				if (!response.ok) {
					throw new Error('Нам не удалось загрузить данные');
				}
				const listTodos = await response.json();
				setTodos(listTodos);
			} catch (error) {
				console.error(error);
				navigate('/loading-error-page', { replace: true });
			} finally {
				setIsLoading(false);
			}
		};
		requestGetTodos();
	}, [refreshTodosFlag]);

	return {
		todos,
		setTodos,
	};
};
