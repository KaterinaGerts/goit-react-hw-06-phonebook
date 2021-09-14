import { combineReducers } from 'redux';
import types from './contacts-types';


const item = (state = [], {type, payload}) => {
  switch (type) {
    case types.ADD:   
      return [...state, payload];
      
      case types.DELETE:
        return state.filter(({id}) => id !== payload)
      
     
    default:
      return state;
  }
};

const filter = (state = '', {type, payload}) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;     
  
    default:
     return state;
  }
}

const contactsReducer = combineReducers({
  item,
  filter, 
});

export default contactsReducer;