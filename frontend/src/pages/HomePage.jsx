import React from "react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Homepage(){
    return (
        <div>
            <Navbar/>
            <Header/>
            <main>
                <h2>Track Your Expense</h2>
                <p>Manage your finances by recording your daily, weekly or monthly expenses</p>
            </main>
            <Footer/>
        </div>
    )
}


export default Homepage;