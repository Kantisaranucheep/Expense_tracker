import React from "react";
import {Link} from "react-router-dom";
import "../../styles/components/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img className="profile-image" src="/assets/images/profile-image.jpg" alt="profile-image" />
                <h3>John Doe</h3>
            </div>
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/main" className="sidebar-link">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/transaction" className="sidebar-link">Transaction</Link>
                    </li>
                    <li>
                        <Link to="/setting" className="sidebar-link">Setting</Link>
                    </li>
                </ul>
        </div>
    );
}

export default Sidebar;
