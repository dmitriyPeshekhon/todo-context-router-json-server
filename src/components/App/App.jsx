import './App.css';
import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { SearchAndSort, ContainerTodos, ModalWindowAddTodo } from '../index';

export const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false); // флаг для useEffect
	const [sort, setSort] = useState(false);
	const [search, setSearch] = useState('');

	const urlMatchData = useMatch('/');

	return (
		<div className="container">
			<div className="tablo-container">
				<SearchAndSort
					sort={sort}
					urlMatchData={urlMatchData}
					setSort={setSort}
					search={search}
					setSearch={setSearch}
				/>
				<ContainerTodos
					search={search}
					sort={sort}
					refreshTodosFlag={refreshTodosFlag}
					setRefreshTodosFlag={setRefreshTodosFlag}
				/>

				{urlMatchData ? (
					<button className="btn-add-todo" onClick={() => setIsModalOpen(true)}>
						+
					</button>
				) : null}
			</div>
			<ModalWindowAddTodo
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				setRefreshTodosFlag={setRefreshTodosFlag}
			/>
		</div>
	);
};
