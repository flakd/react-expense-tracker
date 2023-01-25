import ExpenseItem from './ExpenseItem';

function Expenses(props) {
	const expenses = props.expenses;
	const expenseList = expenses.map((expense) => (
		<ExpenseItem
			key={expense.id}
			title={expense.title}
			date={expense.date}
			amount={expense.amount}
		/>
	));

	return expenseList;
}

export default Expenses;
