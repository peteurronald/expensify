import React from 'react';
import {connect } from 'react-redux';
import selectExpensesTotal  from "../selectors/expenses-total";
//import  expenses from "../tests/fixtures/expenses";
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpenseList = (props) => (
    <div>
        <h2>Expense Summary</h2>
            {props.expenses.length  === 0 &&  `There are no expenses  `}
            {props.expenses.length === 1 &&  `Viewing 1 expense totalling 
                ${numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')} ` }
            {props.expenses.length  > 1 &&    `Viewing ${props.expenses.length} expenses totalling 
                ${numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')} ` }
     </div>   
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }; 
};

export default connect(mapStateToProps)(ExpenseList);