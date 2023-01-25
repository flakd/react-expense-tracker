import ExpenseItem from './ExpenseItem';

function Expenses(props) {
	const expenses = props.expenses;

	return expenses.map((expense) => (
		<ExpenseItem
			key={expense.id}
			title={expense.title}
			date={expense.date}
			amount={expense.amount}
		/>
	));
}

export default Expenses;
