import Chart from '../Chart/Chart';

const ExpensesChart = ({filteredExpenses}) => {
	const chartDataPoints = [
		{month: 'Jan', monthTotal: 0},
		{month: 'Feb', monthTotal: 0},
		{month: 'Mar', monthTotal: 0},
		{month: 'Apr', monthTotal: 0},
		{month: 'May', monthTotal: 0},
		{month: 'Jun', monthTotal: 0},
		{month: 'Jul', monthTotal: 0},
		{month: 'Aug', monthTotal: 0},
		{month: 'Sep', monthTotal: 0},
		{month: 'Oct', monthTotal: 0},
		{month: 'Nov', monthTotal: 0},
		{month: 'Dec', monthTotal: 0},
	];
	let annualExpensesTotal = 0;
	for (let expense of filteredExpenses) {
		let monthIndex = expense.date.getMonth(); // starting with Jan = 0
		let expenseAmt = parseFloat(expense.amount);
		chartDataPoints[monthIndex].monthTotal += expenseAmt;
		annualExpensesTotal += expenseAmt;
	}
	return (
		<Chart
			dataPoints={chartDataPoints}
			annualTotal={annualExpensesTotal}
		/>
	);
};

export default ExpensesChart;
