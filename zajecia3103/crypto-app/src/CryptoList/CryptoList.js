import React from 'react';
import './CryptoList.css'

const CryptoList = props => {
  const currencyArray = Object.keys(props.currencyList).map( keys => {
    let convertedCurrencyArray = {};
    convertedCurrencyArray.currency = keys;
    convertedCurrencyArray.last = props.currencyList[keys].last;
    convertedCurrencyArray.buy = props.currencyList[keys].buy;
    convertedCurrencyArray.sell = props.currencyList[keys].sell;
    convertedCurrencyArray.symbol = props.currencyList[keys].symbol;
    return convertedCurrencyArray;
  })

    return (
      <>
      <ul>
        { currencyArray.map(cur => (
          <li key={cur.currency} className="currency"><span>Last rate:</span> {cur.last}  <span>{cur.currency} [{cur.symbol}]</span></li>
        ))}
      </ul>
      </>
    )
  
}

export default CryptoList;