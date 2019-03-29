import React, {Component} from 'react';
import List from '../List/List';
import Form from '../Form/Form'

class User extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      usersList: []
    }
  }

  changeUserName = (e) => {
    let value = e.target.value
    this.setState({value})
  }

  addNewUser = (e) => {
    e.preventDefault()
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
    return(
      <div>
        <Form
          changeUserName={this.changeUserName}
          addNewUser={this.addNewUser}
          value={this.state.value}
        />
        <List user={this.state.usersList}/>
      </div>
    )
  }

}

export default User;