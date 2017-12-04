import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
    const uid='MkZ3Rm3Fh1R3ObYyMIJ1Pohzyzk1';
    const action = login( uid );

    expect( action ).toEqual( { type: 'LOGIN', uid });
});

test('should setup logout action object', () => {
    const action = logout();

    expect( action ).toEqual( { type: 'LOGOUT' });
});