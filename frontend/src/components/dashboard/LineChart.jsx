import React from "react";
import { Line } from "react-chartjs-2";
import "../../styles/components/dashboard/LineChart.css";
import {Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement} from "chart.js";
ChartJS.register( Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement);

const LineChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Balance Growth ($)",
            data: [2000, 3000, 3500, 4000, 4500, 5000], // Example balance data
            fill: false,
            borderColor: "#4BC0C0",
            tension: 0.1,
          },
        ],
      };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="linechart-container" style={{height: "400px"}}>
            <h3>Account Balance</h3>
            <Line data={data} options={options} />

        </div>
    )
}

export default LineChart;