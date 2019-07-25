import {connect} from 'react-redux';
import UserList from './UserList';
import {fetchUsers} from '../actions/user';

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);