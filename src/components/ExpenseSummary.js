import React from 'react';
import { connect } from 'react-redux';

import selectExpensesTotal from "../selectors/expenses-total";
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import styled from 'styled-components';
import { ContentContainer, LinkButton } from '../styles/styled';
import {prop} from 'styled-tools';

const PageHeader = styled.div`
    background: green;
    margin-bottom: ${props => props.theme.ssize};
    padding: ${props => props.theme.lsize} 0;
`;


const Title = styled.h3`
    font-weight: 100;
    margin: 0;
    color: white;  
    text-align: right;  
`;

const Span = styled.span`
    font-weight: bold;
`;


const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount > 1 ? 'expenses' : 'expense';
    const totalExpense = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <PageHeader>
            <ContentContainer>
                {expensesCount === 0 && <Title>No expenses</Title>}
                {expensesCount > 0 &&
                    <Title> Viewing <Span>{expensesCount}</Span> {expenseWord} totalling <Span>{totalExpense}</Span> </Title>}
            </ContentContainer>
            <ContentContainer>           
                <LinkButton to="/create">Add Expense</LinkButton>
            </ContentContainer>
        </PageHeader>
    );
};

export default ExpenseSummary;
