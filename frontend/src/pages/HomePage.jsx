import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/pages/HomePage.css";

function Homepage() {
    const navigate = useNavigate();

    const handleTryitNow = () => {
        const token = localStorage.getItem("token");
        if (token){
            navigate("/main");
        }else {
            navigate("/signin")
        }
    }
    return (
        <div>
            <Navbar />
            <Header />
            <main>
                <div className="content">
                    <div className="text-image-container">
                            <div className="text-content">
                                <h2>Take the pain out of creating expense reports</h2>
                                <p>Manage your expense reporting process easier with Expense Tracker's convenient features and automation tools.</p>
                                <button onClick={handleTryitNow}>Try it now!</button>
                                
                            </div>
                            <img src="/assets/images/homepage-pic1.png" alt="Expense Tracker Preview" className="main-image" />
                    </div>
                        <h2 className="feature-label">Features</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <img src="" alt="" />
                            <h3>Saving plan</h3>
                            <p>Keep track on savings process to meet your financial goals.</p>
                        </div>
                        <div className="feature-item">
                            <img src="" alt="" />
                            <h3>Debt and loan</h3>
                            <p>Manage your debts, loans and payment process in one place.</p>
                        </div>
                        <div className="feature-item">
                            <img src="" alt="" />
                            <h3>Travel mode</h3>
                            <p>All currencies supported with up-to-date exchange rates.</p>
                        </div>
                        <div className="feature-item">
                            <img src="" alt="" />
                            <h3>Travel mode</h3>
                            <p>All currencies supported with up-to-date exchange rates.</p>
                        </div>
                        <div className="feature-item">
                            <img src="" alt="" />
                            <h3>Travel mode</h3>
                            <p>All currencies supported with up-to-date exchange rates.</p>
                        </div>
                        <div className="feature-item">
                            <img src="" alt="" />
                            <h3>Travel mode</h3>
                            <p>All currencies supported with up-to-date exchange rates.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Homepage;
