import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import CartDetails from './CartDetails';

export default class Container extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cartItems:[],
			showCart:[]
		};
		this.displayCart = this.displayCart.bind(this);
		this.showCartOnClick = this.showCartOnClick.bind(this);
	}

	displayCart(e) {
		this.setState({
			cartItems: e
		});
	}

	showCartOnClick() {
		this.setState({
			showCart: this.state.cartItems
		});
	}

	render() {
		return (
			<div>
				<Header cartBtnEvent={this.showCartOnClick}/>
				<CartDetails details={this.state.showCart}/>
				<Home displayCart={this.displayCart} />
			</div>
			);

	}
}