import actionTypes from '../constants/actionTypes';

export default function familiesReducer(state = {}, action){
  switch (action.type) {
    case (actionTypes.ADD_FAMILY):
      return [
        ...state,
        action.family
      ]
    default:
      return state;
  }
};