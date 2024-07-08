import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Columnchart = ({ data }) => {
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [
            {
                label: 'Data Values',
                data: data.map(d => d.value),
                backgroundColor: data.map(() => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.4)`),
                borderColor: data.map(() => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`),
                borderWidth: 1
            }
        ]
    };
    return (
        <div> <h2>Dynamic Data Column Chart</h2>
            {data.length > 0 ? <Bar data={chartData} /> : <p>No data available</p>}</div>
    )
}

export default Columnchart


