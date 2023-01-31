import Chart from '../Chart/Chart';

const ExpensesChart = ({filteredExpenses}) => {
	const chartDataPoints = [
		{label: 'Jan', value: 0},
		{label: 'Feb', value: 0},
		{label: 'Mar', value: 0},
		{label: 'Apr', value: 0},
		{label: 'May', value: 0},
		{label: 'Jun', value: 0},
		{label: 'Jul', value: 0},
		{label: 'Aug', value: 0},
		{label: 'Sep', value: 0},
		{label: 'Oct', value: 0},
		{label: 'Nov', value: 0},
		{label: 'Dec', value: 0},
	];
	let annualExpensesTotal = 0;
	for (let expense of filteredExpenses) {
		let monthIndex = expense.date.getMonth(); // starting with Jan = 0
		let expenseAmt = parseFloat(expense.amount);
		chartDataPoints[monthIndex].value += expenseAmt;
		annualExpensesTotal += expenseAmt;
	}
	return (
		<Chart
			dataPoints={chartDataPoints}
			annualExpensesTotal={annualExpensesTotal}
		/>
	);
};

export default ExpensesChart;
