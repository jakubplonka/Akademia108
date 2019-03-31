import React, { Component } from 'react';

class InputPanel extends Component {


  render(){
    return(
      <div>
        <input type="text" ref={data => this.text = data}/>
        <button onClick={() => this.props.stateChange(this.text.value)}>Wypisz</button>
      </div>
    )
  }
}

export default InputPanel;