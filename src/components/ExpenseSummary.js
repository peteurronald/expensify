import React from 'react';
import {connect } from 'react-redux';
import selectExpensesTotal  from "../selectors/expenses-total";
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpenseSummary = ({expensesCount, expensesTotal})=> {
    const expenseWord = expensesCount > 1 ? 'expenses' : 'expense';
    const totalExpense = numeral(expensesTotal /100).format('$0,0.00');
    return (
        <div>
            {expensesCount === 0 && <h3>No expenses</h3>}
            {expensesCount > 0 &&   <h3>Viewing {expensesCount} {expenseWord} totalling {totalExpense}</h3>}
        </div>
    );
}; 

export default ExpenseSummary;
