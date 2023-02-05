import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			/* id: Math.random().toString(), */
			id: props.latestId + 1,
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = (e) => {
		setIsEditing(true);
	};
	const stopEditingHandler = (e) => {
		setIsEditing(false);
	};

	if (isEditing) {
		const expensesListContainer = document.querySelector(
			'.expenses-list-container'
		);
		expensesListContainer.style.height = '23rem';
	}
	return (
		<div className='new-expense'>
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
