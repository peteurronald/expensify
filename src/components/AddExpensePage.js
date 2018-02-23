import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { ContentContainer, SubTitle } from '../styles/styled';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ContentContainer>
                    <SubTitle>Add Expense</SubTitle>
                </ContentContainer>
                <ContentContainer>
                    <ExpenseForm onSubmit={this.onSubmit} />
                </ContentContainer>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);