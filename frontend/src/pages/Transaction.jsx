import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import Transactionlist from "../components/dashboard/TransactionList";

function Transaction(){
    return (
        <div className="transaction-container">
            <Navbar/>
            <div className="page">
                <div className="main-content">
                     <div className="sidebar-container">
                        <Sidebar />
                    </div>
                    <div className="right-content">
                        <h2>Transactions</h2>
                        <Transactionlist/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Transaction;