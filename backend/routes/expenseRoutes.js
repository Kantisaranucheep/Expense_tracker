// routes/expenseRoutes.js
import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

router.post('/', async (req, res) => {
  const { name, amount } = req.body;
  const newExpense = new Expense({ name, amount });
  const savedExpense = await newExpense.save();
  res.status(201).json(savedExpense);
});

export default router;
