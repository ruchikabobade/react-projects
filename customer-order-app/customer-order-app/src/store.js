import {createStore} from 'redux'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'

const reducer = combineReducers({
    CustomerReducer
});
const CUSTOMERS = [
    {
        id : 1,
        name : 'abc',
        addressLine1 : 'xyz',
        addressLine2 : 'pqr',
        age : 12,
        postCode : 124563
     }
]

const initialState = {
    CustomerReducer: {customers : CUSTOMERS}
};


let store = createStore(reducer, initialState);

export default store;
