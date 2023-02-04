import {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import ExpensesSorter from './ExpensesSorter';

const Expenses = (props) => {
	const expenses = props.items;
	const [filteredYear, setFilteredYear] = useState('ALL');
	const [clickedButton, setClickedButton] = useState('sortAmountDsc');

	const filterChangeHandler = (selectedYear) => {
		console.log(selectedYear);
		setFilteredYear(selectedYear);
	};

	let filteredExpenses = [];
	if (filteredYear === 'ALL') {
		filteredExpenses = expenses;
	} else {
		filteredExpenses = expenses.filter((expense) => {
			return expense.date.getFullYear().toString() === filteredYear;
		});
	}
	let sortedFilteredExpenses = [];

	const sortExpensesHandler = (e) => {
		console.log('inside sortExpenseHandler');
		console.log(e.target.id);
		setClickedButton(e.target.id); //using State here
	};

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

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter
					selectedYear={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart filteredExpenses={filteredExpenses} />
				<ExpensesSorter onSort={sortExpensesHandler} />
				<ExpensesList
					selectedYear={filteredYear}
					filteredExpenses={sortedFilteredExpenses}
					onDeleteExpenseItem={props.onDeleteExpense}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
