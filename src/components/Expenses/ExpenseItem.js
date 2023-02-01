import DateBlock from '../Date/DateBlock';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	return (
		<li>
			<Card className='expense-item'>
				<DateBlock date={props.date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>
						{props.amount.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
