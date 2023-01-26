import {useState} from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = () => {
	const todayDate = (() => {
		const date = new Date();
		const month = date.toLocaleString('en-US', {month: '2-digit'});
		const day = date.toLocaleString('en-US', {day: '2-digit'});
		const year = date.getFullYear();
		//console.log(dateString);
		return year + '-' + month + '-' + day;
	})();
	const maxDate = todayDate;

	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState(0);
	const [enteredDate, setEnteredDate] = useState(todayDate);
	const errMsg = 'Title must be at least 3 characters long';
	const [message, setMessage] = useState(errMsg);

	const inputChangeHandler = (e) => {
		console(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('button clicked/ form submit fired, but prevented');
		console.log(e);
	};
	const titleChangeHandler = (e) => {
		console.log('current value: ', e.target.value);
		setEnteredTitle(e.target.value);
		if (e.target.value.toString().length > 2) {
			setMessage('Valid title');
		} else {
			setMessage(errMsg);
		}
		console.log('enteredTitle: ', enteredTitle);
	};
	const amountChangeHandler = (e) => {
		console.log('current value: ', e.target.value);
		setEnteredTitle(e.target.value);
		console.log('enteredAmount: ', enteredAmount);
	};
	const dateChangeHandler = (e) => {
		console.log('current value: ', e.target.value);
		setEnteredTitle(e.target.value);
		console.log('enteredDate: ', enteredDate);
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Expense Title</label>
					<input
						id='title'
						type='text'
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
						defaultValue={0}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Date</label>
					<input
						id='date'
						type='date'
						min='2023-01-01'
						max={maxDate}
						defaultValue={todayDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default NewExpenseForm;
