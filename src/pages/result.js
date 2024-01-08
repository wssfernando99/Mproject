import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

const ResultPage = ({ selectedOptions }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Calculate the percentage for each answer category
    const answerCounts = { 0: 0, 1: 0, 3: 0, 5: 0 };

    for (const key in selectedOptions) {
      const value = selectedOptions[key];
      answerCounts[value]++;
    }

    const totalQuestions = Object.keys(selectedOptions).length;
    const percentages = Object.keys(answerCounts).reduce((acc, key) => {
      acc[key] = ((answerCounts[key] / totalQuestions) * 100).toFixed(2);
      return acc;
    }, {});

    // Prepare data for the chart
    const data = {
      labels: ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree'],
      datasets: [
        {
          data: [percentages[0], percentages[1], percentages[3], percentages[5]],
          backgroundColor: ['#FF6384', '#FF9F40', '#FFCD56', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#FF9F40', '#FFCD56', '#36A2EB'],
        },
      ],
    };

    setChartData(data);
  }, [selectedOptions]);

  return (
    <div>
      <h1>Result Page</h1>
      {chartData && <Pie data={chartData} />}
    </div>
  );
};

export default ResultPage;
