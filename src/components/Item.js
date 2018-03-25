import React from 'react'
import ReactDOM from 'react-dom'

class Item extends React.Component {

  render () {
    return (
      <div className="item">
      <ul>
        <li>{this.props.name}  {this.props.quantity } sub-total: ${this.props.price} <a href="#" className="itemDelete">x</a></li>
        </ul>
      </div>
    )
  }
}
export default Item;
