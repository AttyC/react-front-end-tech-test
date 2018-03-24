import React from 'react';
import Item from './Item';

class Basket extends React.Component {
  render() {
    return (
      <div className="basket">
        <Item name="Mountain Dew" price="1.80"/>
        <Item name="Jack Daniels" price="3.35"/>
      </div>
    )
  }
}

export default Basket;
