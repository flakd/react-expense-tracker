//import ExpenseItem from './components/ExpenseItem';
import {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {expensesData} from './data/expensesData';
import {categoriesData} from './data/categoriesData';

const App = () => {
  const [expenses, setExpenses] = useState(expensesData);
  /*uncomment if we're going to allow added new/deleting categories*/
  //const [categories, setCategories] = useState(categoriesData)

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });

    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newExpense),
    };
    fetch(
      'https://react-expense-tracker-5097e-default-rtdb.firebaseio.com/expenses.json',
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    /* 			const data = await response.json();
			console.log(data);
			console.log(data.updatedAt);
 		};*/
    //addExpense();
  };

  const deleteExpenseHandler = (expenseId) => {
    console.log('got here: ', expenseId);
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  const arrayOfIds = expenses.map((expense) => expense.id);
  let maxId = null;
  try {
    maxId = Math.max(...arrayOfIds);
  } catch (e) {
    console.log('one or more of the IDs cannot be converted to a number');
  }
  if (typeof maxId !== 'number') maxId = Math.random();
  return (
    <div>
      <NewExpense
        onAddExpense={addExpenseHandler}
        latestId={maxId}
      />
      <Expenses
        items={expenses}
        onDeleteExpense={deleteExpenseHandler}
      />
    </div>
  );
};

export default App;
