import React from 'react';

const ExpenseFilterCollapseButton = ({
	isChartShown,
	onToggleCollapseButton,
}) => {
	const onClickToggleCollapseButton = (e) => {
		if (isChartShown) {
			e.target.innerHTML = '&#x25BC';
		} else {
			e.target.innerHTML = '&#x25B2';
		}
		onToggleCollapseButton();
	};
	return (
		<div>
			<button
				style={{marginLeft: '40px', color: 'white', backgroundColor: '#40005d'}}
				id='sortAmountAsc'
				className='sort'
				onClick={onClickToggleCollapseButton}
			>
				&#x25BC;
			</button>
		</div>
	);
};

export default ExpenseFilterCollapseButton;
