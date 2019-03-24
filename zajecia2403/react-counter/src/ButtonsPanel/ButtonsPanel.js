import React from 'react';
import './ButtonsPanel.css';

class ButtonsPanel extends React.Component {
  resetOrReinitCounter = (val) => {
    this.props.resetOrReinitCounter(val)
  }

  render() {
    return (
      <>
        <div className="buttons-panel">
          <button onClick={this.props.changeCounterValue}>Add 1</button>
          <button onClick={() => this.resetOrReinitCounter(false)}>Reinit</button>
          <button onClick={() => this.resetOrReinitCounter(true)}>Reset</button>
        </div>
      </>
    )
  }
}

export default ButtonsPanel;