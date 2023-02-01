import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints, annualTotal}) => {
	return (
		<div className='chart'>
			{dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.month}
					percentBarHeight={
						annualTotal > 0 &&
						Math.round((dataPoint.monthTotal / annualTotal) * 100) + '%'
					}
					label={dataPoint.month}
				/>
			))}
		</div>
	);
};

export default Chart;
