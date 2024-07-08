import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Multiserieschart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('mongodb://localhost:27017/my-graphs');
        const data = response.data;

        // Prepare datasets with different colors
        const datasets = data.map((series, index) => ({
          label: series.label,
          data: series.values.map(d => d.value),
          backgroundColor: getRandomColor(), // Function to get random color
          borderColor: getRandomColor(),
          borderWidth: 1,
          fill: false,
        }));

        const chartData = {
          labels: data.length > 0 ? data[0].values.map(d => d.label) : [],
          datasets: datasets,
        };

        setChartData(chartData);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  // Function to generate random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <h2>Multi-Series Line Chart</h2>
      {chartData ? <Line data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default Multiserieschart;
