import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  cutoutPercentage:"80",
  maintainAspectRatio: false,
  animation: false,

  plugins: {
    legend: {
      position: 'bottom' 
    },
    title: {
      display: true,
      text: 'SALARY STATISTIC',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Income',
      data: [2133,1323,4332,4323,2312,5343,5634],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Expense',
      data: [5535,4344,3333,6366,4344,3232,3333],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const SalaryChart = () => {
  return (
    <>
        <Bar options={options} data={data}/>
    </>
  )
}

export default SalaryChart