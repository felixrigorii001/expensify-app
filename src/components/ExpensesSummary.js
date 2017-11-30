import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ( { expensesCount, expensesTotal } ) => (
    <div>
        <h1>Viewing { expensesCount } { expensesCount > 0 ? 'expenses': 'expense'} totalling { numeral( expensesTotal / 100 ).format("$0,0.00") }</h1>
    </div>
);

const mapStateToProps = ( state ) => {
    const expenses = selectExpenses( state.expenses, state.filters );
    return {
        expensesCount: expenses.length,
        expensesTotal: selectExpensesTotal( expenses ) 
    };
};

export default connect( mapStateToProps )( ExpensesSummary );