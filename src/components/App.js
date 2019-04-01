import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest, usersError } from '../actions/users';
import { Alert } from 'reactstrap';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  };

  handleSubmit = ({firstName, lastName}) => {
    this.props.createUserRequest({firstName, lastName});  
  };

  onDeleteUser = (userId) => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.usersError('');
  };

  render() {
    const { users } = this.props;
    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <Alert color="danger" isOpen={!!users.error} toggle={this.handleCloseAlert}>
          {users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit}  />
        <UsersList users={users.items} onDeleteUser={this.onDeleteUser} />
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
})(App);
