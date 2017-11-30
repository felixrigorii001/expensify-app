
export default ( expenses ) => {
    let total = 0;

    // if ( Array.isArray( expenses ) ) {
    //     expenses.forEach( ( expense ) => {
    //         total += expense.amount;
    //     } );
    // } else if ( expenses && expenses.amount ) {
    //     total = expenses.amount;
    // }

    // if ( expenses.length === 0 ) {
    //     total = 0;
    // } else {
    //     total = expenses.map(( expense ) => expense.amount )
    //         .reduce((sum, value ) => sum + value, 0);
    // }

    // return total;

    return expenses.map(( expense ) => expense.amount )
        .reduce((sum, value ) => sum + value, 0);
};