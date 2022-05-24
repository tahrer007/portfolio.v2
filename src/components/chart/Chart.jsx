import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { skillsPercentages } from "../../data/AboutPageData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
     
      display: false
    },
    title: {
      display: null,
      text: "Chart.js Horizontal Bar Chart",
    },
    
  },
  scales: {
    x: {
        suggestedMin: 0,
        suggestedMax: 100
    }
}
};

const labels = skillsPercentages.map((x) => x.name);

export const data = {
  labels,
  datasets: [
    {
      //label: "skills chart",
      data: skillsPercentages.map((x) => x.percentage),
      borderColor: "rgb(141, 99, 255)",
      backgroundColor: "rgba(141, 99, 255, 0.5)",
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data} />;
}
