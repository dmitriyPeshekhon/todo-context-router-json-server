import './ContainerTodos.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ListTodos, TodoPage, LoadErrorPage, ActionFailedPage, Page404 } from '../index';
import { useRequestGetTodos, sortSearchTodos } from '../../hooks/index';

export const ContainerTodos = ({
	refreshTodosFlag,
	setRefreshTodosFlag,
	search,
	sort,
}) => {
	const [isLoading, setIsLoading] = useState(true);

	const { todos } = useRequestGetTodos(setIsLoading, refreshTodosFlag);

	const finalyTodos = sortSearchTodos(todos, search, sort);

	return (
		<div className="container-list-todos">
			{isLoading ? (
				<div className="loader-container">
					<span className="loader" />
				</div>
			) : (
				<Routes>
					<Route
						path="/"
						element={
							<ListTodos
								listTodos={finalyTodos}
								setRefreshTodosFlag={setRefreshTodosFlag}
							/>
						}
					/>
					<Route
						path="/todo/:id"
						element={<TodoPage setRefreshTodosFlag={setRefreshTodosFlag} />}
					/>
					<Route path="/loading-error-page" element={<LoadErrorPage />} />
					<Route path="/action-failed-page" element={<ActionFailedPage />} />
					<Route path="/404" element={<Page404 />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
			)}
		</div>
	);
};
