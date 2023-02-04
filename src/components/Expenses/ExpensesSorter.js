import React from 'react';

const onClickSorter = (e) => {
	console.log(e.target);
};
const ExpensesSorter = ({onClickSort}) => {
	return (
		<div style={{display: 'flex'}}>
			<div
				id='date-sorters'
				className='sorter'
				style={{paddingLeft: '20px', whiteSpace: 'nowrap'}}
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
			<div
				id='amount-sorters'
				className='sorter'
				style={{paddingLeft: '40%', whiteSpace: 'nowrap'}}
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
		</div>
	);
};

export default ExpensesSorter;
