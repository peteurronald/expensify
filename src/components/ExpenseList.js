import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import styled from "styled-components";
import { ContentContainer} from '../styles/styled';


const ShowForMobile = styled.div`
  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    display:none;
  }  
`;
const ShowForDesktop = styled.div`
  @media (max-width: ${props => props.theme.desktopBreakpoint}) {
    display:none;
  }  
`;

const ListHeader = styled.div`
    background:  green;  
    color: white;
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.ssize} ${props => props.theme.msize}
`;

const ListBody = styled.div`
    margin-bottom:  ${props => props.theme.msize};
    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        margin-bottom:  ${props => props.theme.lsize};
    }    
`;

const Message = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.grey};
    padding: ${props => props.theme.msize};
    &:hover{
        background:none;
    };
`;

export const ExpenseList = (props) => (
    <ContentContainer>
        <ListHeader>
            <ShowForMobile>Expenses</ShowForMobile>
            <ShowForDesktop>Expense</ShowForDesktop>
            <ShowForDesktop>Amount</ShowForDesktop>
        </ListHeader>
        <ListBody>
            {
                props.expenses.length === 0 ?
                    <div>
                        <Message>No expenses</Message>
                    </div>
                    : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />;
                        })
                    )
            }
        </ListBody>
    </ContentContainer>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
