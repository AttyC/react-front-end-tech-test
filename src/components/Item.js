import React from 'react'
import ReactDOM from 'react-dom'

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.quantity
    };

    this.updateQuantity = this.updateQuantity.bind(this);
    this.resetQuantity = this.resetQuantity.bind(this);
  }

  updateQuantity = event => {
    this.setState({
      quantity: Number(event.target.value)
    });

  }

  resetQuantity = event => {
    this.setState({
      quantity: 0
    });
  };

  render () {
    return (
      <div className="item">
        {this.props.name} price={(this.props.price * this.state.quantity).toFixed(2)}
        <input type='number' className='quantity' value={this.state.quantity}
          onChange={this.updateQuantity} />
          <a href="#" className="itemDelete" onClick={this.resetQuantity}>x</a>
      </div>
    )
  }
}
export default Item;
