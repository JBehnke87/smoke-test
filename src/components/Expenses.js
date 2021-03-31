import React from 'react'

const Expense = ({expense, expenseNumber}) => (
  <div className="expense">
    { expenseNumber.toString() }: { expense.date } - ${ expense.amount }
  </div>
)

const Expenses = ({expenses}) => (
  <div className="expenses">
    <p>The first expense's amount is { expenses.length === 0 ? "none" : expenses[0].amount}</p>
    { expenses.map( (expense, i) => <Expense key={i} expense={expense} expenseNumber={i}/>) }
  </div>
)

export default Expenses