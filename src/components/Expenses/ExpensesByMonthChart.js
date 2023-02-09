import {useState} from 'react';
import Chart from '../Chart/Chart';
import ExpensesByCategoryChart from './ExpensesByCategoryChart';

const ExpensesChart = (props) => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState();
  const chartDataPoints = [
    {value: 'Jan', total: 0},
    {value: 'Feb', total: 0},
    {value: 'Mar', total: 0},
    {value: 'Apr', total: 0},
    {value: 'May', total: 0},
    {value: 'Jun', total: 0},
    {value: 'Jul', total: 0},
    {value: 'Aug', total: 0},
    {value: 'Sep', total: 0},
    {value: 'Oct', total: 0},
    {value: 'Nov', total: 0},
    {value: 'Dec', total: 0},
  ];
  let annualExpensesTotal = 0;
  for (let expense of props.filteredExpenses) {
    let monthIndex = expense.date.getMonth(); // starting with Jan = 0
    let expenseAmt = parseFloat(expense.amount);
    chartDataPoints[monthIndex].total += expenseAmt;
    annualExpensesTotal += expenseAmt;
  }

  let monthlyExpenses = props.filteredExpenses;
  if (selectedMonthIndex !== undefined) {
    monthlyExpenses = props.filteredExpenses.filter(
      (expense) => expense.date.getMonth() === selectedMonthIndex
    );
  }

  const selectMonthHandler = (monthIndex) => {
    setSelectedMonthIndex(monthIndex);
  };

  return (
    <>
      <Chart
        dataPoints={chartDataPoints}
        grandTotal={annualExpensesTotal}
        onChartSelected={selectMonthHandler}
      />
      <ExpensesByCategoryChart filteredExpenses={monthlyExpenses} />
    </>
  );
};

export default ExpensesChart;
