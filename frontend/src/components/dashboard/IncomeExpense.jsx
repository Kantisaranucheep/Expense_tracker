import React from "react";
import "../../styles/components/dashboard/IncomeExpense.css"

function IncomeExpense(){
    return (
        <div className="income-expense-container">
            <div className="income-container">
                <h3>Income</h3>
                <p>$10000</p>
            </div>
            <div className="expense-container">
                <h3>Expense</h3>
                <p>$2500</p>
            </div>
            <div className="balance-container">
                <h3>Balance</h3>
                <p>$7500</p>
            </div>
            <div className="total-transaction-container">
                <h3>Total Transaction</h3>
                <p>$1250</p>
            </div>
        </div>
    );
}

export default IncomeExpense;