import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
