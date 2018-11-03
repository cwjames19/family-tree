import actionTypes from "../constants/actionTypes";

let nextMemberId = 1;

export const addMember = () => ({
  type: actionTypes.ADD_MEMBER,
  id: nextMemberId++
})

export const subtractMember = (index) => ({
  type: actionTypes.SUBTRACT_MEMBER,
  index
})

export const updateMemberInput = (updatedMembers) => ({
  type: actionTypes.UPDATE_MEMBER_INPUT,
  updatedMembers: updatedMembers
})

export const resetFamilyMembers = () => ({
  type: actionTypes.RESET_FAMILY_MEMBERS
})
