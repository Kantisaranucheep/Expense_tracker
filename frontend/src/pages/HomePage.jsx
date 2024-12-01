import React from "react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/pages/HomePage.css";

function Homepage() {
    return (
        <div>
            <Navbar />
            <Header />
            <main>
                <div className="content">
                    <div className="text-content">
                        <h2>Take the pain out of creating expense reports</h2>
                        <p>Manage your expense reporting process easier with Expense Tracker's convenient features and automation tools.</p>
                        <button>Try it now!</button>
                    </div>
                    <img src="/assets/images/homepage-pic1.png" alt="Expense Tracker Preview" className="main-image" />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Homepage;
