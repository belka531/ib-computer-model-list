import {ADD_COMPUTER} from './App';

const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_COMPUTER:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default reducer;