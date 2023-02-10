import {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';
import ExpensesByMonthChart from './ExpensesByMonthChart';
import ExpensesByCategoryChart from './ExpensesByCategoryChart';
import ExpensesList from './ExpensesList';
import ExpensesSorterLeft from './ExpensesSorterLeft';
import ExpensesSorterRight from './ExpensesSorterRight';
import ExpenseFilterCollapseButton from './ExpenseFilterCollapseButton';
import SortHelper from '../../helpers/SortHelper';

const Expenses = (props) => {
  const expenses = props.items;
  const [filteredYear, setFilteredYear] = useState('ALL');
  const [clickedButton, setClickedButton] = useState('sortAmountDsc');
  const [isChartShown, setIsChartShown] = useState(false);

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = [];
  if (filteredYear === 'ALL') {
    filteredExpenses = expenses;
  } else {
    filteredExpenses = expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }
  //let sortedFilteredExpenses = SortHelper.getSortedExpenses(
  let sortedFilteredExpenses = SortHelper.getSortedExpenses(
    clickedButton,
    filteredExpenses
  );

  const sortExpensesHandler = (e) => {
    console.log('inside sortExpenseHandler');
    console.log(e.target.id);
    setClickedButton(e.target.id); //using State here
  };

  const toggleCollapseHandler = (e) => {
    setIsChartShown(!isChartShown);
    if (isChartShown) {
      props.closeNewExpenseForm();
    }
  };

  if (!props.isChartOpen && isChartShown) {
    props.closeNewExpenseForm();
  }
  if (props.isChartOpen && !isChartShown) {
    console.log('formOpen');
    props.openNewExpenseForm();
  }
  console.log(props.isChartOpen);
  //setIsChartShown(props.isChartOpen);

  return (
    <div>
      <Card className='expenses'>
        {isChartShown && (
          <ExpensesByMonthChart filteredExpenses={filteredExpenses} />
        )}
        <div style={{display: 'inline-flex'}}>
          <ExpensesSorterLeft onSort={sortExpensesHandler} />
          <ExpenseFilter
            selectedYear={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesSorterRight onSort={sortExpensesHandler} />
          <ExpenseFilterCollapseButton
            chartShown={isChartShown}
            onToggleCollapseButton={toggleCollapseHandler}
          />
        </div>
        <ExpensesList
          selectedYear={filteredYear}
          filteredExpenses={sortedFilteredExpenses}
          onDeleteExpenseItem={props.onDeleteExpense}
        />
      </Card>
    </div>
  );
};

export default Expenses;
