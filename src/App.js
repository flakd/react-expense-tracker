//import ExpenseItem from './components/ExpenseItem';
import {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	const [expenses, setExpenses] = useState([
		{
			id: '1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: '2',
			title: 'New TV',
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: '3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: '4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	]);

	const addExpenseHandler = (newExpense) => {
		//console.log(expenses);
		setExpenses((prevExpenses) => {
			//console.log(expenses.concat(expenses));
			//return expenses.concat(expense);
			return [...prevExpenses, newExpense];
		});
		//console.log(expenses);
	};

	const deleteExpenseHandler = (expenseId) => {
		console.log('got here: ', expenseId);
		setExpenses((prevExpenses) =>
			prevExpenses.filter((expense) => expense.id !== expenseId)
		);
	};

	const arrayOfIds = expenses.map((expense) => expense.id);
	let maxId = Math.max(...arrayOfIds);
	if (typeof maxId !== 'number') maxId = Math.random();
	return (
		<div>
			<NewExpense
				onAddExpense={addExpenseHandler}
				latestId={maxId}
			/>
			<Expenses
				items={expenses}
				onDeleteExpense={deleteExpenseHandler}
			/>
		</div>
	);
};

export default App;
