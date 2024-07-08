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
import zoomPlugin from 'chartjs-plugin-zoom';

// Registering the necessary components and plugins
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin,
    Filler
);

const ZoomableGraph = ({ data }) => {
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [
            {
                label: 'Data Values',
                data: data.map(d => d.value),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                fill: true
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy',
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'xy',
                }
            }
        }, scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Label'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    };

    return (
        <div>
            <h2>Dynamic Data Graph with Zoom and Pan</h2>
            {data.length > 0 ? <Line data={chartData} options={options} /> : <p>No data available</p>}
        </div>
    );
};

export default ZoomableGraph;
