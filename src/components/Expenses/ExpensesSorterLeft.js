const ExpensesSorterLeft = (props) => {
	const onClickSort = (e) => {
		console.log(e.target);
		const buttons = document.querySelectorAll('.sort');
		console.log(buttons);
		buttons.forEach((button, index) => {
			button.style.textDecoration = 'none';
		});
		e.target.style.textDecoration = 'underline';
		props.onSort(e);
	};

	return (
		<div style={{display: 'inline-flex'}}>
			<div
				id='date-sorters'
				className='sorter'
				style={{paddingLeft: '15px', whiteSpace: 'nowrap'}}
			>
				<button
					id='sortDateDsc'
					className='sort'
					onClick={onClickSort}
				>
					&#x25BC;
				</button>
				<button
					id='sortDateAsc'
					className='sort'
					onClick={onClickSort}
				>
					&#x25B2;
				</button>
			</div>
			<div
				id='title-sorters'
				className='sorter'
				style={{width: '33%', paddingLeft: '50px', whiteSpace: 'nowrap'}}
			>
				<button
					id='sortTitleDsc'
					className='sort'
					onClick={onClickSort}
				>
					&#x25BC;
				</button>
				<button
					id='sortTitleAsc'
					className='sort'
					onClick={onClickSort}
				>
					&#x25B2;
				</button>
			</div>
		</div>
	);
};

export default ExpensesSorterLeft;
