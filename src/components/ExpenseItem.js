import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const buttonClickHandler = (e) => {
		setTitle('Update Title');
		console.log(title);
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>{props.amount}</div>
				<button>Change Title</button>
			</div>
		</Card>
	);
};

export default ExpenseItem;
