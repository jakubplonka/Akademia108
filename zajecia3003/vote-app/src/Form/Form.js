import React, { Component } from 'react';

class Form extends Component {

  constructor() {
    super();
    this.inputValue = React.createRef();
    console.log(this.inputValue);
    
  }

  render () {
    return(
      <form onSubmit={}>
        <input />
        <input type="submit" ref={this.inputValue}/>
      </form>
    )
  }
}

export default Form;