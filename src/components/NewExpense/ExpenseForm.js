import {useState} from 'react';
import './ExpenseForm.css';
import DateHelper from '../../helpers/DateHelper';
import ComboDropdown from '../UI/ComboDropdown';

/* import categoriesData from '../../data/categoriesData';
console.log('categoriesData external = ', categoriesData); */

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState(DateHelper.todayDateAsString);
  const [enteredCategory, setEnteredCategory] = useState('');

  const [isCategoryAMatch, setIsCategoriesAMatch] = useState(false);
  const errMsg = <div>Title must be at least 3 characters long</div>;
  const [message, setMessage] = useState(errMsg);

  const categories = require('../../data/categoriesData.json');
  console.log('categories json=', categories);

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
  //there's no categoryChangeHandler here, it's in the ComboDropDown.js

  const comboChangeHandler = (isMatch, cat) => {
    //setIsCategoriesAMatch(true);
    setIsCategoriesAMatch(isMatch);
    setEnteredCategory(cat);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const cancelClickHandler = (e) => {
    props.onCancel();
    resetFormFields();
  };
  const clickAddExpenseHandler = (e) => {
    /* this is our real submit handler, b/c otherwise any other button on the
      form will submit - so we will prevent default on the actual 
      submitHandler function */
    if (
      !enteredTitle ||
      !enteredAmount ||
      enteredAmount === '0' ||
      !enteredDate ||
      !isCategoryAMatch
    )
      return;
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      category: enteredCategory,
    };
    props.onSaveExpenseData(expenseData);
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
        <ComboDropdown
          name='category'
          value={enteredCategory}
          onComboChange={comboChangeHandler}
          options={categories}
          customStyle=''
        />
        <div className='new-expense__actions'>
          <button
            type='button'
            onClick={cancelClickHandler}
          >
            Cancel
          </button>
          <button
            type='button'
            onClick={clickAddExpenseHandler}
          >
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
