import React from 'react';

import './ExpensesFilter.css';

const ExpenseFilter = (props) => {
  const thisYear = new Date().getFullYear();
  let years = [];
  for (let i = 0; i < 5; i++) {
    years.push(thisYear - i);
  }
  console.log(years);

  const dropdownChangeHandler = (e) => {
    //console.log(e.target.value);
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor='year'>year</label>
        <select
          id='year'
          value={props.selectedYear}
          onChange={dropdownChangeHandler}
        >
          <option
            key='ALL'
            value='ALL'
          >
            ALL
          </option>
          {years.map((year, index) => (
            <option
              key={index}
              value={year}
            >
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
