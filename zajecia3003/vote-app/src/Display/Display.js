import React from 'react';
import './Display.css'


const Display = (props) => {

  const { reactValueLength, angularValueLength } = props;
  const sumValues = reactValueLength + angularValueLength;
  let reactValue = Math.round((reactValueLength / sumValues) * 100) + '%';
  let angularValue = Math.round((angularValueLength / sumValues) * 100) + '%';
  if (sumValues === 0) {
    reactValue = "50%";
    angularValue = "50%";
  }
  
  
  
  return (
    <div className="display-container">
      <div className="display-bar">
        <div className="reactValue" style={{width: reactValue}}>
          {reactValue}
        </div>
        <div className="angularValue" style={{width: angularValue}}>
          {angularValue}
        </div>
      </div>
    </div>

  )
}

export default Display;