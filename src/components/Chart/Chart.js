import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints, annualExpensesTotal}) => {
	return (
		<div className='chart'>
			{dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={annualExpensesTotal}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
