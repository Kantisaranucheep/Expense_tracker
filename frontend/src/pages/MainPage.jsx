import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import IncomeExpense from "../components/dashboard/IncomeExpense";
import TotalExpense from "../components/dashboard/TotalExpense";
import LineChart from "../components/dashboard/LineChart";
import "../styles/pages/MainPage.css"

function MainPage(){
    return (
        <div className="dashboard-container">
                <Navbar />
            <div className="main-content">
                
                <IncomeExpense/>
                <div className="charts-container">
                    <TotalExpense/>
                    <LineChart/>
                </div>

            </div>
            <Footer/>
        </div>

    )
}

export default MainPage;