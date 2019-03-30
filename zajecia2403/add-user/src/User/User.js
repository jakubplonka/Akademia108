import React, {Component} from 'react';
import List from '../List/List';
import Form from '../Form/Form';

class User extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      usersList: [],
      filteredUsers: []
    }
  }

  changeUserName = (e) => {
    let value = e.target.value
    this.setState({value})
  }

  addNewUser = (e) => {
    e.preventDefault()
    if (!this.state.value) return;
    const newUser = {
      key: Date.now(),
      name: this.state.value
    };
    this.setState((prevstate) => {
      
      return(
        {usersList: prevstate.usersList.concat(newUser),
        value: ''}
    )
    })
  }

  render() {
    const { usersList, filteredUsers, value} = this.state;
    return(
      <div>
        <Form
          changeUserName={this.changeUserName}
          addNewUser={this.addNewUser}
          value={value}
        />
        <List user={filteredUsers.length > 0 ? filteredUsers : usersList}/>
      </div>
    )
  }

}

export default User;