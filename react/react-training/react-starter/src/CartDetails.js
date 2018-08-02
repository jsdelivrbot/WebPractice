import React, {Component} from 'react';

export default class CartDetails extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let cartItems = [];
		for (let i=0;i<this.props.details.length;i++) {
			cartItems.push(<li>{this.props.details[i]}</li>);
				console.log(this.props.details[i]);
		}

		return(
				<div id="cartDetails">
					{cartItems}
				</div>
			);
	}

}