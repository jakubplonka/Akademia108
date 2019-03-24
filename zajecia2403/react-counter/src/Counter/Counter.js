import React from 'react';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counterVal: 0
    }
  }
  
  changeValue = () => {
    this.setState( (prevState) => {
      return({
        counterVal: prevState.counterVal + 1
      })
    })
    
  }

  resetCounter = (val) => {
    let initValue = 0

    if (!val) {
      initValue = this.props.initValue
    }
    this.setState({
      counterVal: initValue
    })
  }

  render() {
    return(
      <>
        <div>Licznik: {this.props.initValue}</div>
        <div>{this.state.counterVal}</div>
        <ButtonsPanel 
          changeCounterValue={this.changeValue}
          resetOrReinitCounter={this.resetCounter}
        />
      </>
    )
  }
}
export default Counter;