
import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect( state ).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer( expenses, action );
    expect( state ).toEqual( [ expenses[0], expenses[2]] );
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer( expenses, action );
    expect( state ).toEqual( expenses );
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Food Bill',
        amount: 123400,
        note: '',
        createdAt: moment()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer( expenses, action );
    expect( state ).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () => {
    const updates = JSON.parse( JSON.stringify( expenses[0] ) );
    updates.amount = 99900;
    const action = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates
    };
    const state = expensesReducer( expenses, action );
    expect( state ).toEqual([ updates, expenses[1], expenses[2]]);
});

test('should not edit expenses if expense not found', () => {
    const updates = JSON.parse( JSON.stringify( expenses[0] ) );
    updates.amount = 99900;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer( expenses, action );
    expect( state ).toEqual(expenses);
});