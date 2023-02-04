import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
	if (props.filteredExpenses.length === 0) {
		return (
			<h2 className='expenses-list__fallback'>
				No Expenses found for {props.selectedYear}
			</h2>
		);
	}

	return (
		<div className='expenses-list-container'>
			<ul className='expenses-list'>
				{props.filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						id={expense.id}
						title={expense.title}
						date={expense.date}
						amount={expense.amount}
						onClickDelete={props.onDeleteExpenseItem}
					/>
				))}
			</ul>
		</div>
	);
};
export default ExpensesList;
