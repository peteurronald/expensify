import authReducer from '../../reducers/auth';
import {login, logout} from '../../actions/auth';
import expenses from '../fixtures/expenses';


test('should set up default state', ()=> {
    const state = authReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual({});
});

test('should set uid for login', ()=> {
    const uid = '123ABC';
    const action = login(uid);
    const state = authReducer({}, action);
    expect(state).toEqual({uid:uid});  
});

test('should clear uid for logout', ()=> {
    const state = authReducer({uid: 'anything'}, logout());
    expect(state).toEqual({});  
});