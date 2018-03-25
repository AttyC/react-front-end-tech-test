import React from 'react'
import ReactDOM from 'react-dom'

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0
    };

     this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
  }

  handleUpdateQuantity(event){
    this.setState({
      quantity: Number(event.target.value)
    });
  }

  render () {
    return (
      <div className="item">
        {this.props.name} price={(this.props.price * this.state.quantity).toFixed(2)}
        <input type='number' value={this.state.quantity}
          onChange={this.handleUpdateQuantity} />
          <a href="#" className="itemDelete">x</a>
      </div>
    )
  }
}
export default Item;
