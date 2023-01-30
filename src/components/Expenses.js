import {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {
	const expenses = props.items;
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		console.log(selectedYear);
		setFilteredYear(selectedYear);
		//props.onFilterExpenses(selectedYear);
		//console.log(selectedYear);
	};

	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>

				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						date={expense.date}
						amount={expense.amount}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
