import React from 'react';

const ExpenseFilterCollapseButton = ({onToggleCollapseButton}) => {
	return (
		<div>
			<button
				style={{marginLeft: '40px', color: 'white', backgroundColor: '#40005d'}}
				id='sortAmountAsc'
				className='sort'
				onClick={onToggleCollapseButton}
			>
				&#x25B2;
			</button>
		</div>
	);
};

export default ExpenseFilterCollapseButton;
