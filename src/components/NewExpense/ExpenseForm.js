import {useState} from 'react';
import './ExpenseForm.css';
import DateHelper from '../../helpers/DateHelper';
import CategoryComboDropdown from './CategoryComboDropdown';

import wtf from '../../data/categoriesData';
console.log('categoriesData external = ', wtf);

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState(DateHelper.todayDateAsString);
  const [enteredCategory, setEnteredCategory] = useState('');
  const errMsg = <div>Title must be at least 3 characters long</div>;
  const [message, setMessage] = useState(errMsg);
  const categories = require('../../data/categoriesData');
  //const [categories, setCategories] = useState([]);

  /*   const categoriesData = [
    {id: 0, name: 'Toiletries'},
    {id: 1, name: 'Electronics'},
    {id: 2, name: 'Insurance'},
    {id: 3, name: 'Furniture'},
    {id: 4, name: 'Utilities'},
    {id: 5, name: 'Groceries'},
    {id: 6, name: 'Pharmacy'},
    {id: 7, name: 'Doctors'},
    {id: 8, name: 'Auto'},
  ];
  const categories = categoriesData; */

  //setCategories(wtf);
  const titleChangeHandler = (e) => {
    //console.log('e.target.value: ', e.target.value);
    setEnteredTitle(e.target.value);
    if (e.target.value.toString().length > 2) {
      setMessage(<div>&nbsp;</div>);
    } else {
      setMessage(errMsg);
    }
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    setEnteredCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !enteredTitle ||
      !enteredAmount ||
      enteredAmount === '0' ||
      !enteredDate
    )
      return;
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    resetFormFields();
  };

  const cancelClickHandler = (e) => {
    props.onCancel();
    resetFormFields();
  };

  const resetFormFields = () => {
    const expensesListContainer = document.querySelector(
      '.expenses-list-container'
    );
    expensesListContainer.style.height = '36rem';
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate(DateHelper.todayDateAsString);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Expense Title</label>
          <input
            id='title'
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder='Please enter a description/title'
          />
          {message}
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            type='date'
            min='2019-01-01'
            max={DateHelper.todayDateAsString}
            /* defaultValue={todayDate} */
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <CategoryComboDropdown />
        <div className='new-expense__actions'>
          <button
            type='button'
            onClick={cancelClickHandler}
          >
            Cancel
          </button>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
