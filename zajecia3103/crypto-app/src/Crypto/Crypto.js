import React, { Component } from 'react';
import axios from 'axios';
import CryptoList from '../CryptoList/CryptoList'

class Crypto extends Component {
  constructor() {
    super();
    this.state = {
      currency: [],
      filteredValues: []
    }
  }
  
  

  insertData(){
    axios.get(`https://blockchain.info/pl/ticker`)
      .then(res => {
        const currency = res.data;
        const currencyArray = Object.keys(currency).map( keys => {
          let convertedCurrencyArray = {};
          convertedCurrencyArray.currency = keys;
          convertedCurrencyArray.last = currency[keys].last;
          convertedCurrencyArray.buy = currency[keys].buy;
          convertedCurrencyArray.sell = currency[keys].sell;
          convertedCurrencyArray.symbol = currency[keys].symbol;
          return convertedCurrencyArray;
        })
        this.setState({ currency: currencyArray });
      })
  }

  componentDidMount() {
    this.insertData();
    setInterval(() => {
      this.insertData();
    }, 5000);
  }

  handleChange = () => {
    const {value} = this.filterValue;
    const filteredList = this.state.currency.filter( el => {
      return el.currency.toLowerCase().includes(value);
    })
    if (filteredList === 0 && value){
      this.setState({
        filteredValues: [{ currency: 'No currency found', key: Date.now() }]
      })
      return
    }
    if (value === ''){
      this.setState({filteredValues: []});
      return
    }
    this.setState({ filteredValues: filteredList });
  }

  render() {
    const {currency, filteredValues} = this.state;
    return (
      <div className="currencyList">
      <input type="text" onChange={this.handleChange} ref={data => this.filterValue = data}/>
        <CryptoList currencyList={filteredValues.length > 0 ? filteredValues : currency}/>
      </div>
    )
  }
}

export default Crypto;