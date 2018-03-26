import React from 'react';
import Item from './Item';

class Basket extends React.Component {
	constructor() {
		super();
		this.state = {
			quantity: 0
		};
	}

	render() {
		const itemList = [
			{ id: 1, name: 'Mountain Dew', price: '1.80', quantity: this.state.quantity },
			{ id: 2, name: 'Desperados', price: '2.60', quantity: this.state.quantity  },
			{ id: 3, name: 'Jack Daniels', price: '3.35' , quantity: this.state.quantity }
		];

		return (
			<div className='basket'>
				<ul>
					{itemList.map( item =>
						<li key={item.id}>
							<Item
								name={item.name}
								price={item.price}
								quantity={item.quantity}
							/>
						</li>
					)}
				</ul>
				<div className='checkout'>

					<div className='total'>
						$Total
					</div>
					<div className='clear'>
						<a href='#'>Clear</a>
					</div>
					<div className='checkout-button'>
						<button>Check out ></button>
					</div>
					</div>
			</div>
		);
	}
}

export default Basket;
