import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "../../styles/components/dashboard/Barchart.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barchart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May"], // Months or categories
        datasets: [
            {
                label: "Income",
                data: [5000, 7000, 8000, 7500, 9000], // Income values
                backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue color
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
            {
                label: "Expense",
                data: [3000, 5000, 4000, 5500, 6000], // Expense values
                backgroundColor: "rgba(255, 99, 132, 0.6)", // Red color
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Income vs Expense Bar Chart",
            },
        },
    };

    return (
        <div className="container" style={{ maxWidth: "800px",display: "flex",flexDirection: "column", alignItems: "start" }}>
            <h3>Income and Expense</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Barchart;
