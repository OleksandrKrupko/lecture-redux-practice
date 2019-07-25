import {RECIVE_USERS} from '../reducers/users';

const reciveUsers = users => ({
  type: RECIVE_USERS,
  users
});

export const fetchUsers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => dispatch(reciveUsers(users)))
}
