import React from 'react';
import InputPanel from '../InputPanel/InputPanel';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      input: 'wypisz tekst'
    }
  }

  updateText = (props) => {
    console.log(props);
    
    this.setState({
      input: props
    });
  }

  render(){
    return (
      <div className="container">
        <h1>Home!!</h1>
        <div>{this.state.input}</div>
        <InputPanel stateChange={this.updateText}/>
      </div>
    );
  }
}

export default Home;