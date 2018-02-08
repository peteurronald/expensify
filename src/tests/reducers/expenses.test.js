import expensesReducer from '../../reducers/expenses';
import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';


test('should set up default state', ()=> {
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=> {
    const action = removeExpense(expenses[0]);
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);  
});

test('should not remove expense if not found', ()=> {
    const action = removeExpense(-1);
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);  
});

test('should add an expense', ()=> {
    const action = addExpense(expenses[0]);
    action.expense.id = expenses[0].id;
    const state = expensesReducer([], action);
    expect(state).toEqual([expenses[0]]);  
});

test('should edit an expense', ()=> {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '0',
        updates:{description: 'Gum'}
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('Gum');  
});

test('should not edit an expense if not found', ()=> {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates:{description: 'Gum'}
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);  
});