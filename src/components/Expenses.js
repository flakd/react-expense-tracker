import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses = (props) => {
	const expenses = props.expenses;

	return (
		<Card className='expenses'>
			{expenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					date={expense.date}
					amount={expense.amount}
				/>
			))}
		</Card>
	);
};

export default Expenses;
