import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    this.state = {
        side: "tura", 
        donuyor: false,
        turnCount: 0,
        headCount: 0,
        tailCount:0
    }
    // Fonksiyon arrow function olduğu için bind işlemine gerek kalmıyor.
  }
  handleClick = () => {
    const num = Math.floor(Math.random() * 2);
    console.log(`Random sayı: ${num}`);     // Değeri kontrol ediyoruz.
    
    this.setState({
      side: num === 0 ? "yazi" : "tura",
      donuyor: true,
      turnCount: this.state.turnCount + 1,
      headCount: this.state.side === "tura" ? this.state.headCount + 1 : this.state.headCount,
      tailCount: this.state.side === "yazi" ? this.state.tailCount + 1 : this.state.tailCount,
    });

    setTimeout(() => this.setState({donuyor: false}), 1000);
  };

  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick} >At!</button>
        <p>
            Toplam
            <strong> {this.state.turnCount} </strong>
            atıştan
            <strong> {this.state.headCount} </strong>
            ü tura
            <strong> {this.state.tailCount} </strong>
            si yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;