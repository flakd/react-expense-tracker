import DateBlock from '../Date/DateBlock';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const clickDeleteHandler = (e) => {
		console.log('clicked ' + e.target.id + "on ITEM '%s'", props.id);
		props.onClickDelete(props.id);
	};
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
					<i
						id='delete'
						style={{fontSize: '24px', color: 'red', cursor: 'pointer'}}
						className='fa'
						onClick={clickDeleteHandler}
					>
						&#xf00d;
					</i>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
