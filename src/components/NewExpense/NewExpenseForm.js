import {useState} from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = () => {
	const getMaxDate = (() => {
		const date = new Date();
		const month = date.toLocaleString('en-US', {month: '2-digit'});
		const day = date.toLocaleString('en-US', {day: '2-digit'});
		const year = date.getFullYear();
		//console.log(dateString);
		return year + '-' + month + '-' + day;
	})();

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('button clicked/ form submit fired, but prevented');
		console.log(e);
	};
	const changeHandler = (e) => {
		console.log(e.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Expense Title</label>
					<input
						type='text'
						onChange={changeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={changeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Date</label>
					<input
						type='date'
						min='2023-01-01'
						max={getMaxDate}
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
