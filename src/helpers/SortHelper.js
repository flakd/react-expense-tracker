//const SortHelper = () => {
const getSortedExpenses = function (clickedButton, filteredExpenses) {
	let sortedFilteredExpenses;
	switch (clickedButton) {
		case 'sortDateDsc':
			sortedFilteredExpenses = filteredExpenses.sort((a, b) => {
				//console.log(e.target.id);
				return b.date - a.date; //sort reverse chronologically
			});
			break;
		case 'sortDateAsc':
			sortedFilteredExpenses = filteredExpenses.sort((a, b) => {
				return a.date - b.date; //sort chronologically
			});
			break;
		case 'sortTitleDsc':
			console.log(filteredExpenses);
			//sortedFilteredExpenses = () => {
			console.log(
				filteredExpenses
					.map((expense) => {
						return expense.title.toLowerCase();
					})
					.sort()
			);
			sortedFilteredExpenses = filteredExpenses.sort((a, b) =>
				a.title.toLowerCase() < b.title.toLowerCase()
					? 1
					: b.title.toLowerCase() < a.title.toLowerCase()
					? -1
					: 0
			);
			break;
		case 'sortTitleAsc':
			sortedFilteredExpenses = filteredExpenses.sort((a, b) =>
				a.title.toLowerCase() > b.title.toLowerCase()
					? 1
					: b.title.toLowerCase() > a.title.toLowerCase()
					? -1
					: 0
			);
			break;
		case 'sortAmountDsc':
			sortedFilteredExpenses = filteredExpenses.sort((a, b) => {
				return b.amount - a.amount; //sort descending by amount
			});
			break;
		case 'sortAmountAsc':
			sortedFilteredExpenses = filteredExpenses.sort((a, b) => {
				return a.amount - b.amount; //sort ascending by amount
			});
			break;
		default: //sort chronologically
			console.log('default executed');
			sortedFilteredExpenses = filteredExpenses.sort((a, b) => {
				return a.date - b.date; //sort chronologically
			});
			break;
	}
	return sortedFilteredExpenses;
};
//};

exports.getSortedExpenses = getSortedExpenses;
