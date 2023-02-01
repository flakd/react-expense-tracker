import {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
	const expenses = props.items;
	const [filteredYear, setFilteredYear] = useState('ALL');

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
	const sortedFilteredExpenses = filteredExpenses.sort((a, b) => {
		//make sure your dates are Dates, if string convert them with new Date(myDate)
		//return b.date - a.date;  //sort reverse chronologically
		return a.date - b.date; //sort chronologically
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter
					selectedYear={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart filteredExpenses={filteredExpenses} />
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
