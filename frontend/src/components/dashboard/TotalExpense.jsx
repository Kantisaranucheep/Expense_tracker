import React from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement} from "chart.js";
import "../../styles/components/dashboard/TotalExpense.css"
ChartJS.register(Title,Tooltip,Legend,ArcElement);


const TotalExpense = () => {
    const data =  {
        labels: ["Food", "Bills", "Transport", "Shopping", "Others"],
        datasets: [
            {
                data: [4000,3000,2000,1500,1000],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F7464A"],
                hoverBackgroundColor: ["#FF3A5D", "#248DCE", "#FFB83D", "#2FAFBD", "#F1302A"],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="total-expense-container" style={{height: "400px"}}>
            <h3>Expense Distribution</h3>
            <Pie data={data} options={options} />

        </div>
    )
}

export default TotalExpense;