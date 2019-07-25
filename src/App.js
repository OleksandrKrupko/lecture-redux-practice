import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserListContainer from './UserList/UserList.container';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <UserListContainer />
    </div>
  );
}

export default App;
