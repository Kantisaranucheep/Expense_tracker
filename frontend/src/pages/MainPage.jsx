import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import IncomeExpense from "../components/dashboard/IncomeExpense";
import TotalExpense from "../components/dashboard/TotalExpense";
import LineChart from "../components/dashboard/LineChart";
import Barchart from "../components/dashboard/Barchart";
import "../styles/pages/MainPage.css";

function MainPage() {
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="lol">
                <div className="main-content">
                    <div className="sidebar-container">
                        <Sidebar />
                    </div>
                    <div className="right-content">
                        <div className="income-container">
                            <IncomeExpense />
                        </div>
                        <div className="charts-container single-chart">
                            <TotalExpense />
                        </div>
                        <div className="charts-container side-by-side">
                            <LineChart />
                            <Barchart />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;
