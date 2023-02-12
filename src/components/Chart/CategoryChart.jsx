import CategoryChartBar from './CategoryChartBar';
import './Chart.css';

const Chart = (props) => {
  const onChartSelect = (id) => {
    props.onChartSelected(id);
  };
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint, index) => (
        <CategoryChartBar
          key={dataPoint.value}
          percentBarHeight={
            props.grandTotal > 0 &&
            Math.round((dataPoint.total / props.grandTotal) * 100) + '%'
          }
          index={index}
          label={dataPoint.value}
          onChartBarSelect={onChartSelect}
        />
      ))}
    </div>
  );
};

export default Chart;
