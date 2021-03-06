import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class NewUserForm extends Component {

  state = {
    firstName: '',
    lastName: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({firstName: this.state.firstName, lastName: this.state.lastName});
  }

  handleFirstNameChange = e => {
    this.setState({firstName: e.target.value});
  }

  handleLastNameChange = e => {
    this.setState({lastName: e.target.value});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>
            First Name
          </Label>
          <Input required placeholder="First Name" onChange={this.handleFirstNameChange} value={this.state.firstName}></Input>
        </FormGroup>

        <FormGroup>
          <Label>
            Last Name
          </Label>
          <Input required placeholder="Last Name" onChange={this.handleLastNameChange} value={this.state.lastName}></Input>
        </FormGroup>

        <Button block outline type="submit" color="primary">
          Create
        </Button>

      </Form>
    )
  }
}

export default NewUserForm;