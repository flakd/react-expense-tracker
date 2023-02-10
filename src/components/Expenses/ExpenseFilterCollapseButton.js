const ExpenseFilterCollapseButton = (props) => {
  const onClickToggleCollapseButton = (e) => {
    const expensesListContainer = document.querySelector(
      '.expenses-list-container'
    );
    if (props.chartShown) {
      e.target.innerHTML = '&#x25BC';
      expensesListContainer.style.height = '36rem';
    } else {
      e.target.innerHTML = '&#x25B2';
      expensesListContainer.style.height = '26rem';
    }
    props.onToggleCollapseButton();
  };
  return (
    <div>
      <button
        style={{marginLeft: '40px', color: 'white', backgroundColor: '#40005d'}}
        id='toggleChartBtn'
        className='sort'
        onClick={onClickToggleCollapseButton}
      >
        &#x25BC;
      </button>
    </div>
  );
};

export default ExpenseFilterCollapseButton;
