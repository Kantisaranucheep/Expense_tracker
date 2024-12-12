import React from "react";
import { useState } from "react";
import "../../styles/components/dashboard/Transactionlist.css";

function Transactionlist(){
    const [transactions, setTransactions] = useState([
       {id: 1, name: "Salary", amount: 5000},
       {id: 2, name: "Gym membership", amount: -500},
       {id: 3, name: "Groceries", amount: -200},
    ]);
    
    const addTransaction = () => {
        const newTransaction = {
            id: transactions.length +1,
            name: "New Transaction",
            amount: 0,
        };
        setTransactions([...transactions, newTransaction]);
    };  

    return (
        <div className="transactionlist-container">
            <h3>Transaction List</h3>
            <ul className="transaction-list">
                {transactions.map((transaction) => (
                    <li key={transaction.id} className="transaction-item">
                        <span className="transaction-name">{transaction.name}</span>
                        <span
                            className={`transaction-amount ${
                                transaction.amount >= 0 ? "income" : "expense"
                            }`}
                        >
                            {transaction.amount >= 0 ? `+${transaction.amount}` : transaction.amount}
                        </span>
                    </li>
                ))}
            </ul>
            <button className="add-transaction-button" onClick={addTransaction}>
                Add Transaction
            </button>
        </div>
    );
}

export default Transactionlist;