import {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {
	const expenses = props.expenses;
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		console.log(selectedYear);
		setFilteredYear(selectedYear);
		props.onFilterExpenses(selectedYear);
		//console.log(selectedYear);
	};

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>

				{expenses.map((expense) => (
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
