import React from 'react';
import {connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal  from "../selectors/expenses-total";
import ExpenseSummary from './ExpenseSummary';

export const ExpenseDashboardPage = (props) => {
    const count = props.expenses.length;
    const total =  selectExpensesTotal(props.expenses);
    return (
        <div>   
            <ExpenseSummary expensesCount={count} expensesTotal={total} />
            <ExpenseListFilters />
            <ExpenseList />
        </div>   
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }; 
};

export default connect(mapStateToProps)(ExpenseDashboardPage);
