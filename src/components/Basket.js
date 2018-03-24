import React from 'react';
import Item from './Item';

class Basket extends React.Component {
  render() {
    const itemList = [
      { id: 1, name: "Mountain Dew", price: "1.80"},
      { id: 2, name: "Desperados", price: "2.60"},
      { id: 3, name: "Jack Daniels", price: "3.35"}
    ];

    return (
      <div className="basket">
        {itemList.map( item =>
          <Item name={item.name} price={item.price}/>
        )}
      </div>
    )
  }
}

export default Basket;
