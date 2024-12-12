import React from "react";
import { useState } from "react";
import AddExpenseForm from "../forms/AddExpenseForm";
import "../../styles/components/dashboard/Transactionlist.css";

function Transactionlist(){
    const [transactions, setTransactions] = useState([
       {id: 1, name: "Salary", amount: 5000},
       {id: 2, name: "Gym membership", amount: -500},
       {id: 3, name: "Groceries", amount: -200},
    ]);

    const [isFormOpen, setIsFormOpen] = useState(false);
    
    const handleSave = (newTransaction) => {
        setTransactions([...transactions, {id: transactions.length +1, ...newTransaction}])
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
            <button className="add-transaction-button" onClick={() => setIsFormOpen(true)}>
                Add Transaction
            </button>
            {isFormOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            className="modal-close"
                            onClick={() => setIsFormOpen(false)}
                        >
                            &times;
                        </button>
                        <AddExpenseForm
                            onClose={() => setIsFormOpen(false)}
                            onSave={handleSave}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Transactionlist;