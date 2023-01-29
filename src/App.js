//import ExpenseItem from './components/ExpenseItem';
import {useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	const [expenses, setExpenses] = useState([
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'New TV',
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	]);

	const addExpenseHandler = (expense) => {
		//console.log(expenseData);
		//console.log(expenses);
		setExpenses((prevState) => {
			//console.log(expenses.concat(expenses));
			return expenses.concat(expense);
		});
		//console.log(expenses);
	};

	let filteredExpenses = [];
	const filterExpensesHandler = (selectedYear) => {
		filteredExpenses = expenses.filter(
			(expense) => expense.date.getFullYear() === selectedYear
		);
		console.log(filteredExpenses);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses
				/* expenses={filteredExpenses} */
				expenses={expenses}
				onFilterExpenses={filterExpensesHandler}
			/>
		</div>
	);
};

export default App;
