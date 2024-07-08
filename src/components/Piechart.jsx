import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const Piechart = ({ data }) => {
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [
            {
                label: 'Data Values',
                data: data.map(d => d.value),
                backgroundColor: data.map((_, index) => `hsl(${index * 360 / data.length}, 100%, 50%)`),
                borderColor: 'rgba(255,255,255,1)',
                borderWidth: 1
            }
        ]
    };
    return (
        <div>
            <h2>Dynamic Data Graph</h2>
            {data.length > 0 ? <Pie data={chartData} /> : <p>No data available</p>}
        </div>
    )
}

export default Piechart

