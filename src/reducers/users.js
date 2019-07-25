export const RECIVE_USERS = 'RECIVE_USERS';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type) {
    case 'RECIVE_USERS':
      return action.users;
    default:
      return state;
  }
}