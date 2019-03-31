import React, { Component } from 'react';

class Form extends Component {

  constructor() {
    super();
    this.inputValue = React.createRef();
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.inputValue.current;
    if (!value) return;
    this.props.setValue(value);
    this.inputValue.current.value = '';
  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <input ref={this.inputValue}/>
        <input type="submit" />
      </form>
    )
  }
}

export default Form;