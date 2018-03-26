import React from 'react';

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 0,
			subTotal: 0
		};
		this._updateQuantity = this._updateQuantity.bind(this);
		this._resetQuantity = this._resetQuantity.bind(this);
	}
	_updateQuantity(event){
		this.setState({
			quantity: Number(event.target.value),
			subTotal: (this.props.price * this.state.quantity)
		});
	}

	_resetQuantity(event){
		this.setState({
			quantity: 0
		});
	}

	render () {
		return (
			<div className="item">
				<div className='name'>{this.props.name}</div>
				<div><input type='number' className='quantity' onChange={this._updateQuantity} value={this.state.quantity}/></div>
				<div className='sub-total'>${(this.props.price * this.state.quantity).toFixed(2)}</div>
				<div><a href="#" className="itemDelete" onClick={this._resetQuantity}>x</a></div>
			</div>
		);
	}
}
export default Item;
