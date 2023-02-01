import {useState} from 'react';
import './ExpenseForm.css';
import {todayDateAsString} from '../../helpers/date';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState(todayDateAsString);
	const errMsg = <p>Title must be at least 3 characters long</p>;
	const [message, setMessage] = useState(errMsg);

	const titleChangeHandler = (e) => {
		//console.log('e.target.value: ', e.target.value);
		setEnteredTitle(e.target.value);
		if (e.target.value.toString().length > 2) {
			setMessage(<p>&nbsp;</p>);
		} else {
			setMessage(errMsg);
		}
	};
	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		resetFormFields();
	};

	const cancelClickHandler = (e) => {
		props.onCancel();
		resetFormFields();
	};

	const resetFormFields = () => {
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate(todayDateAsString);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Expense Title</label>
					<input
						id='title'
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
						placeholder='Please enter a description/title'
					/>
					<p>{message}</p>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input
						id='amount'
						type='number'
						min='0.01'
						step='0.01'
						/* defaultValue={0} */
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Date</label>
					<input
						id='date'
						type='date'
						min='2019-01-01'
						max={todayDateAsString}
						/* defaultValue={todayDate} */
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className='new-expense__actions'>
					<button
						type='button'
						onClick={cancelClickHandler}
					>
						Cancel
					</button>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
