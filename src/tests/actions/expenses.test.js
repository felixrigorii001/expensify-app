
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    startEditExpense,
    editExpense, 
    startRemoveExpense, 
    removeExpense, 
    setExpenses, 
    startSetExpenses 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const createMockStore = configureMockStore([thunk]);

beforeEach( (done) => {
    const expensesData = {};

    expenses.forEach(({id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });

    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done() );
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect( action ).toEqual( { type: 'REMOVE_EXPENSE', id: '123abc' } );
});

test('should remove expense from firebase', (done ) => {
    const store = createMockStore({ auth: { uid } });
    const id = expenses[2].id;

    store.dispatch( startRemoveExpense( { id } ) )
        .then(() => {
            const actions = store.getActions();
            expect( actions[0] ).toEqual({
                type: 'REMOVE_EXPENSE',
                id: id
            });

            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        })
        .then( ( snapshot  ) => {
            expect( snapshot.val() ).toBeFalsy();
            done();
        });
});

test('should setup edit expense action object', () => {
    const action = editExpense( '1234@abc', { description: 'Water bill', amount: 1200 });

    expect( action ).toEqual( { 
        type: 'EDIT_EXPENSE', 
        id: '1234@abc', 
        updates: {  
            description: 'Water bill', 
            amount: 1200 
        } 
    });
});

test('should edit expense from firebase', ( done ) => {
    const store = createMockStore({ auth: { uid } });
    const id = expenses[2].id;
    const expenseData = {
        'description': 'This is just a test'
    };

    store.dispatch( startEditExpense( id, expenseData ) )
        .then(() => {
            const actions = store.getActions();
            expect( actions[0] ).toEqual({
                type: 'EDIT_EXPENSE',
                id: id,
                updates: expenseData
            });

            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        })
        .then( (snapshot) => {
            expect ( snapshot.val().description).toBe('This is just a test');
            done();
        });
});

test('should setup add expense action object with provided values', () => {
    // const expenseData = {
    //     description: 'Rent',
    //     amount: 109500,
    //     createdAt: 1000,
    //     note: 'This was last months rent'
    // };
    const action = addExpense( expenses[2] );
    expect( action ).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});


test('should add expense to database and store', (done) => {
    const store = createMockStore({ auth: { uid }});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch( startAddExpense(expenseData))
        .then( () => {
            const actions = store.getActions();
            expect( actions[0] ).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
        }).then((snapshot) => {
            expect( snapshot.val() ).toEqual( expenseData );

            done();
        });
});

test('should add expenses with defaults to database and store', ( done ) => {
    const store = createMockStore({ auth: { uid }});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch( startAddExpense({}))
        .then( () => {
            const actions = store.getActions();
            expect( actions[0] ).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefault
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
        }).then((snapshot) => {
            expect( snapshot.val() ).toEqual( expenseDefault );

            done();
        });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses( expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({ auth: { uid }});
    store.dispatch( startSetExpenses() ).then(() => {
        const actions = store.getActions();
        expect( actions[0]).toEqual({
            type: 'SET_EXPENSES', 
            expenses
        });
        done();
    });
});

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect( action ).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '', 
//             note: '', 
//             amount: 0, 
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// });