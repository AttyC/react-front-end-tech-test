import React from 'react';
import Item from './Item';

class Basket extends React.Component {

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
  render() {
    const itemList = [
      { id: 1, name: "Mountain Dew", price: "1.80", quantity: this.state.quantity },
      { id: 2, name: "Desperados", price: "2.60", quantity: this.state.quantity},
      { id: 3, name: "Jack Daniels", price: "3.35", quantity: this.state.quantity }
    ];

    return (
      <div className="basket">
        <h1>Say Hi to your Basket... </h1>
      {itemList.map( item =>
        <div>
          <form onSubmit={this.handleSubmit}>
            <Item name={item.name} quantity={item.quantity} price={(item.price * item.quantity).toFixed(2)}/>
            <input type='number' value={this.state.quantity}
              onChange={this.handleUpdateQuantity} />
          </form>
        </div>
      )}

      </div>
    )
  }
}

export default Basket;
