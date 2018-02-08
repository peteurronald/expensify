import selectExpenses from '../../selectors/expenses';
import expensesFix from '../fixtures/expenses'
import moment from 'moment';

test('should filter by text value', ()=> {
    const filters ={
        text: 'b',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
     const result = selectExpenses(expensesFix, filters);
     expect(result).toEqual(
         [expensesFix[0]]
     );
});
 
test('should filter by start date', ()=> {
    const filters ={
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
     const result = selectExpenses(expensesFix, filters);
     expect(result).toEqual(
         [expensesFix[2], expensesFix[0]]
     );
});

test('should filter by end date', ()=> {
    const filters ={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
     const result = selectExpenses(expensesFix, filters);
     expect(result).toEqual(
         [expensesFix[0], expensesFix[1]]
     );
});

test('should sort by date', ()=> {
    const filters ={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
     const result = selectExpenses(expensesFix, filters);
     expect(result).toEqual(
         [expensesFix[2] ,expensesFix[0], expensesFix[1]]
     );
});

test('should sort by amount', ()=> {
    const filters ={
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
     const result = selectExpenses(expensesFix, filters);
     expect(result).toEqual(
         [expensesFix[2] ,expensesFix[1], expensesFix[0]]
     );
});
