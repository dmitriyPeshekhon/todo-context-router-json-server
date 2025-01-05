const sorted = (arr) => {
	return arr.sort((a, b) => {
		const aa = a.title.toLowerCase();
		const bb = b.title.toLowerCase();
		if (aa > bb) {
			return 1;
		}
		if (aa < bb) {
			return -1;
		}
		return 0;
	});
};

const filter = (arr, str) => arr.filter((todo) => todo.title.includes(str));

export const sortSearchTodos = (todos, searchWord, sort) => {
	if (searchWord) {
		if (sort) {
			return sorted(filter(todos, searchWord));
		}

		return filter(todos, searchWord);
	} else if (sort) {
		return sorted([...todos]);
	} else {
		return todos;
	}
};
