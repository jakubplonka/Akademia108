import React, {Component} from 'react';
import ListVote from '../ListVote/ListVote';
import VoteForm from '../Vote/VoteForm'

class VoteAddUser extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      usersListReact: [],
      usersListAngular: []
    }
  }

  changeUserNameReact = (e) => {
    let value = e.target.value
    this.setState({value})
  }
  changeUserNameAngular = (e) => {
    let value = e.target.value
    this.setState({value})
  }

  addNewUserReact = (e) => {
    e.preventDefault()
    if (!this.state.value) return;
    const newUser = {
      key: Date.now(),
      name: this.state.value
    };
    this.setState((prevstate) => {
      console.log(prevstate);
      
      return(
        {usersListReact: prevstate.usersListReact.concat(newUser),
        value: ''}
    )
    })
  }
  addNewUserAngular = (e) => {
    e.preventDefault()
    if (!this.state.value) return;
    const newUser = {
      key: Date.now(),
      name: this.state.value
    };
    this.setState((prevstate) => {
      
      return(
        {usersListAngular: prevstate.usersListAngular.concat(newUser),
        value: ''}
    )
    })
  }

 
  render() {
    const { usersListReact, usersListAngular, value} = this.state;
    return(
      <div>
        <VoteForm
          changeUserNameReact={this.changeUserNameReact}
          changeUserNameAngular={this.changeUserNameAngular}
          addNewUserReact={this.addNewUserReact}
          addNewUserAngular={this.addNewUserAngular}
          value={value}
        />
        <ListVote 
          userReact={usersListReact}
          userAngular={usersListAngular}
        />
      </div>
    )
  }

}

export default VoteAddUser;