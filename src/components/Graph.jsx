import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Graph = ({ data }) => {
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [
            {
                label: 'Data Values',
                data: data.map(d => d.value),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
    };

    return (
        <div>
            <h2>Dynamic Data Graph</h2>
            {data.length > 0 ? <Line data={chartData} options={options} /> : <p>No data available</p>}
        </div>
    );
};

export default Graph;
