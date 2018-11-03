import actionTypes from '../constants/actionTypes';

const initialMemberState = {
  id: 0,
  firstName: '',
  age: ''
}

const initialState = {
  lastName: '',
  nationality: '',
  members: [
    initialMemberState
  ]
}

const addFamilyReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_MEMBER: {
      return {
        ...state,
        members: [
          ...state.members,
          {
            firstName: '',
            age: '',
            id: action.id
          }
        ]
      }
    }
    case actionTypes.SUBTRACT_MEMBER: {
      return {
        ...state,
        members: [
          ...state.members.slice(0, action.index),
          ...state.members.slice(action.index + 1)
        ]
      }
    }
    case actionTypes.UPDATE_MEMBER_INPUT: {
      return {
        ...state,
        members: action.updatedMembers
      }
    }
    case actionTypes.RESET_FAMILY_MEMBERS: {
      return {
        ...state,
        members: [
          initialMemberState
        ]
      }
    }
    default:
      return state;
  }
}

export default addFamilyReducer;