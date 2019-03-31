import React, { Component } from 'react';
import axios from 'axios';
import CryptoList from '../CryptoList/CryptoList'

class Crypto extends Component {
  constructor() {
    super();
    this.state = {
      currency: []
    }
  }

  componentDidMount(prevProps, prevState) {
    axios.get(`https://blockchain.info/pl/ticker`)
      .then(res => {
        const currency = res.data;
        if (currency !== prevState){
          this.setState({ currency });
        }
      })
    setInterval(() => {
      axios.get(`https://blockchain.info/pl/ticker`)
      .then(res => {
        const currency = res.data;
        if (currency !== prevState){
          this.setState({ currency });
        }
      })
    }, 5000);
  }

  render() {
    return (
      <div className="currencyList">
      <input onChange={this.handleChange}/>
        <CryptoList currencyList={this.state.currency}/>
      </div>
    )
  }
}

export default Crypto;