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
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const Multiseriesarea = ({ data }) => {
    const colors = [
        'rgba(75,192,192,0.4)',
        'rgba(255,99,132,0.4)',
        'rgba(54,162,235,0.4)',
        'rgba(255,206,86,0.4)',
        'rgba(153,102,255,0.4)'
    ];

    // Assigning the datasets for each series of the schema 
    const datasets = data.map((series, index) => ({
        label: series.label,
        data: series.values.map(d => d.value),
        backgroundColor: colors[index % colors.length], // Cycle through colors if more series than colors
        borderColor: colors[index % colors.length],
        borderWidth: 1,
        fill: false,
    }));

    const chartData = {
        labels: data.length > 0 ? data[0].values.map(d => d.label) : [],
        datasets: datasets,
    };
    return (
        <div>
            <h2>Multi-Series Line Chart</h2>
            {data.length > 0 ? <Line data={chartData} /> : <p>No data available</p>}
        </div>
    )
}

export default Multiseriesarea