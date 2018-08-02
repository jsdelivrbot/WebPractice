import React, {Component} from 'react';
import './style/product.css';

class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name : this.props.name
		}
		this.updateCart = this.updateCart.bind(this);
	}

	updateCart() {
		this.props.addToCartEvent(this.props.name);
	}

	render() {
		return (
				<div className="product">
					<div>
						<img src={this.props.url} />
					</div>
					<div>
		            	<label>{this.props.name} - {this.props.price}</label>
		            </div>
		            <div>
		            	<button onClick={this.updateCart}>Add</button>
		            </div>
				</div>
			);
	}

}

export default Product;