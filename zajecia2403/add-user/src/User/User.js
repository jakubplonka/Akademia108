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

  filterUsers = (e) => {
    const {value} = e.target;
    const filteredList = this.state.usersList.filter((el) => {
      return el.name.toLowerCase().includes(value);
    });

    if (filteredList.length === 0 && value) {
      this.setState({
        filteredUsers: [{name: 'No users found... :(', key: Date.now()}]
      })
      return
    }
    this.setState({
      filteredUsers: filteredList
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
        <input onChange={this.filterUsers} placeholder="text..."></input> 
        <List user={filteredUsers.length > 0 ? filteredUsers : usersList}/>
      </div>
    )
  }

}

export default User;