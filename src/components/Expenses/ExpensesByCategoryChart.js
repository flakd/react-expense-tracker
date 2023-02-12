import CategoryChart from '../Chart/CategoryChart';
import Chart from '../Chart/Chart';

const ExpensesChart = ({filteredExpenses}) => {
  const chartDataPoints = [
    {value: 'Toiletries', total: 0},
    {value: 'Electronics', total: 0},
    {value: 'Insurance', total: 0},
    {value: 'Furniture', total: 0},
    {value: 'Utilities', total: 0},
    {value: 'Groceries', total: 0},
    {value: 'Pharmacy', total: 0},
    {value: 'Doctors', total: 0},
    {value: 'Auto', total: 0},
    {value: 'Internet', total: 0},
    {value: 'Entertainment', total: 0},
    {value: 'Travel', total: 0},
    {value: 'Exercise', total: 0},
  ];

  let monthlyExpensesTotal = 0;
  for (let expense of filteredExpenses) {
    let cat = expense.category; // starting with Jan = 0
    let expenseAmt = parseFloat(expense.amount);
    for (let chartDataPoint of chartDataPoints) {
      if (chartDataPoint.value === cat) {
        chartDataPoint.total += expenseAmt;
      }
    }
    monthlyExpensesTotal += expenseAmt;
  }
  const onCategorySelected = (id) => {
    console.log('id: ', id);
  };
  return (
    <div>
      <Chart
        dataPoints={chartDataPoints}
        grandTotal={monthlyExpensesTotal}
        onChartSelected={onCategorySelected}
      />
    </div>
  );
};

export default ExpensesChart;
