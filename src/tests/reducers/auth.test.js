
import authReducer from '../../reducers/auth';

test('should set user uid upon login', () => {
    const uid = 'MkZ3Rm3Fh1R3ObYyMIJ1Pohzyzk1';
    const action = {
        type: 'LOGIN',
        uid
    };

    const state = authReducer( {}, action );

    expect( state ).toEqual( { uid } );
});

test('should remove user uid upon logout', () => {
    const uid = 'MkZ3Rm3Fh1R3ObYyMIJ1Pohzyzk1';
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer( { uid }, action );
    expect( state ).toEqual( {} );
});