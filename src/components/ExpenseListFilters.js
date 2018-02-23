import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import {css} from "styled-components";
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import { ContentContainer, TextInput, Select} from '../styles/styled';


const InputGroup = styled.div`
  display: flex;
  flex-direction: row;      
  margin-bottom:  ${props => props.theme.ssize};
 
  @media (max-width: ${props => props.theme.desktopBreakpoint}) {
    display: flex;
    flex-direction: column; 
    margin-bottom:  ${props => props.theme.lsize};
  }  
`;


const Item = styled.div`
    margin-bottom: ${props => props.theme.ssize};
    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        margin-right: ${props => props.theme.ssize};
        margin-bottom: 0 ${props => props.theme.ssize} 0 0;
    }
`;


export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDateChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };
    render() {
        return (
            <ContentContainer>
                <InputGroup>
                    <Item>
                        <TextInput type="text" placeholder="Search Expenses..." value={this.props.filters.text} onChange={this.onTextChange} />
                    </Item>
                    <Item>
                        <Select value={this.props.filters.sortBy} onChange={this.onSortChange} >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </Select>
                    </Item>
                    <Item>
                        <DateRangePicker
                            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                            startDateId="startDateId" // PropTypes.string.isRequired,
                            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                            endDateId="endDateId" // PropTypes.string.isRequired,
                            onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
                            focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </Item>
                </InputGroup>
            </ContentContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

const mapStateToProps = (state) => ({
    filters: state.filters
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);