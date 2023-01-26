const NewExpenseForm = () => {
	const date = new Date();
	const month = date.toLocaleString('en-US', {month: '2-digit'});
	const day = date.toLocaleString('en-US', {day: '2-digit'});
	const year = date.getFullYear();
	const dateString = year + '-' + month + '-' + day;
	//console.log(dateString);

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('button clicked/ form submit fired, but prevented');
		console.log(e);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Expense Title</label>
					<input type='text' />
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Date</label>
					<input
						type='date'
						min='2023-01-01'
						max={dateString}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add New Expense</button>
				</div>
			</div>
		</form>
	);
};

export default NewExpenseForm;
