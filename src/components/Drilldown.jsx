import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Title, Tooltip, Legend);
const DrillDown = ({ data }) => {
    //  // Calculating the total sum of values for percentage calculation
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    // Chart data configuration
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [{
            data: data.map(d => d.value),
            backgroundColor: data.map(() => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.4)`),
            borderColor: data.map(() => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`),
            borderWidth: 1,
        }]
    };
    // Options for the Drilldown chart
    const chartOptions = {
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        const value = context.raw.toFixed(2);
                        const percentage = ((value / total) * 100).toFixed(2) + '%';
                        return label + value + ' (' + percentage + ')';
                    }
                }
            }
        }
    };
    const percentageList = data.map((item, index) => (
        <li key={index} style={{ listStyleType: 'none', color: chartData.datasets[0].backgroundColor[index] }}>
            {item.label}: {((item.value / total) * 100).toFixed(2)}%
        </li>
    ));

    return (
        <div>
            <h2>DrillDown Chart</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '50%' }}>
                    <Doughnut data={chartData} options={chartOptions} />
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <ul style={{ padding: 0, textAlign: 'center' }}>
                            {percentageList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DrillDown;