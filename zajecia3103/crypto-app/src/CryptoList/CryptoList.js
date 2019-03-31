import React from 'react';
import './CryptoList.css'

const CryptoList = props => {
  

    return (
      <>
      <ul>
        { props.currencyList.map(cur => (
          <li key={cur.currency} className="currency"><span>Last rate:</span> {cur.last}  <span>{cur.currency} [{cur.symbol}]</span></li>
        ))}
      </ul>
      </>
    )
  
}

export default CryptoList;