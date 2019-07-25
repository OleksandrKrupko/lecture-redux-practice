import React from 'react';

export default class UserListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  
  render() {
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )
  }
}