import actionTypes from '../constants/actionTypes';

let nextId = 1;

export const addFamily = (data) => {
  return {
    type: actionTypes.ADD_FAMILY,
    family: {
      ...data,
      _id: nextId++
    }
  }
}