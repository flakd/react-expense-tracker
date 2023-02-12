import './ChartBar.css';

const ChartBar = (props) => {
  const onChartBarClick = (e) => {
    console.log(e.target.id);
    //props.onChartBarSelect(e.target.id);
    props.onChartBarSelect(+e.target.id);
  };
  return (
    <div className='chart-bar'>
      <div
        id={props.index}
        className='chart-bar__inner'
        onClick={onChartBarClick}
      >
        <div
          id={props.index}
          className='chart-bar__fill'
          style={{height: props.percentBarHeight}}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
