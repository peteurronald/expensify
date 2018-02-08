import filtersReducer from '../../reducers/filters';
import {setTextFilter, setStartDate, setEndDate} from '../../actions/filters'
import moment from 'moment';

test('should set up default filter values', ()=> {
 const state = filtersReducer(undefined, {type:'@@INIT'});
 expect(state).toEqual({
    text:'', 
    sortBy: 'date', 
    startDate: moment().startOf('month'),
    endDate:moment().endOf('month') 
 });
});

test('should set sortBy to amount', ()=> {
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT',  sortBy: 'amount'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', ()=> {
    const currentState = {
        text:'', 
        sortBy: undefined, 
        startDate: undefined,
        endDate: undefined, 
    }
    const state = filtersReducer(currentState, {type:'SORT_BY_DATE',  sortBy: 'date'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter', ()=> {
    const action = setTextFilter('description');
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('description');
});

test('should set start date', ()=> {
    const action = setStartDate(moment(0));
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});


test('should set end date', ()=> {
    const action = setEndDate(moment(0));
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});