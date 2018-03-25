import React from 'react'
import ReactDOM from 'react-dom'

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
      resetQuantity: false
    };

     this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
     this.handleResetQuantity = this.handleResetQuantity.bind(this);
  }

  handleUpdateQuantity(event){
    this.setState({
      quantity: Number(event.target.value)
    });
  }
  handleResetQuantity(event){
    this.setState({
      quantity: 0
    });
  }

  render () {
    return (
      <div className="item">
        {this.props.name} price={(this.props.price * this.state.quantity).toFixed(2)}
        <input type='number' className='quantity' value={this.state.quantity}
          onChange={this.handleUpdateQuantity} />
          <a href="#" className="itemDelete" onClick={this.handleResetQuantity}>x</a>
      </div>
    )
  }
}
export default Item;
