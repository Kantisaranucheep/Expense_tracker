import React, { useState } from "react";
import "../../styles/components/forms/AddExpenseForm.css"

function AddExpenseForm({onClose,onSave}){
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({name, amount: parseFloat(amount)});
        onClose();
    }
    return (
        <div className="Transaction-form-container">
            <h3>Add Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required />
                </div>
                <button className="transaction" type="submit">Save</button>
                <button className="transaction" type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default AddExpenseForm;