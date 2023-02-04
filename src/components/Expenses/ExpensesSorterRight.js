const ExpensesSorterRight = ({onSort}) => {
	const onClickSort = (e) => {
		console.log(e.target);
		const buttons = document.querySelectorAll('.sort');
		console.log(buttons);
		buttons.forEach((button, index) => {
			button.style.textDecoration = 'none';
		});
		e.target.style.textDecoration = 'underline';
		onSort(e);
	};
	return (
		<div
			id='amount-sorters'
			className='sorter'
			style={{paddingLeft: '23%', whiteSpace: 'nowrap'}}
		>
			<button
				id='sortAmountDsc'
				className='sort'
				onClick={onClickSort}
			>
				&#x25BC;
			</button>
			<button
				id='sortAmountAsc'
				className='sort'
				onClick={onClickSort}
			>
				&#x25B2;
			</button>
		</div>
	);
};
export default ExpensesSorterRight;
